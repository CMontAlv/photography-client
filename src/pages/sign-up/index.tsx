import * as React from 'react';
import { Form, Alert } from 'react-bootstrap';

import { api } from '../../api/auth';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import { useFormFields } from '../../hooks/use-form-fields';

import { loginSuccess, signUp, signUpSuccess, signUpError } from '../../state/application/actions';
import { getHasSignUpError } from '../../state/application/selectors';
import { useDispatch, useSelector } from '../../state/store';

import './styles.css';

export const SignUp: React.FunctionComponent = () => {
    const [hasSignedUp, setHasSignedUp] = React.useState(false);
    const [isSigningUp, setIsSigningUp] = React.useState(false);
    const [isConfirming, setIsConfirming] = React.useState(false);
    const [hasConfirmError, setHasConfirmError] = React.useState(false);
    const [fields, setFields] = useFormFields({ email: '', password: '', confirmPassword: '', confirmationCode: '' });

    const dispatch = useDispatch();
    const hasSignUpError = useSelector(getHasSignUpError);

    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(signUp());
        setIsSigningUp(true);

        const [user, error] = await api.signUp(fields.email, fields.password);

        if (error) {
            dispatch(signUpError());
            setIsSigningUp(false);
            return;
        }

        setIsSigningUp(false);
        setHasSignedUp(true);
        dispatch(signUpSuccess());
    };

    const handleConfirmSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsConfirming(true);
        setHasConfirmError(false);

        const [, error] = await api.confirmSignUp(fields.email, fields.confirmationCode);

        if (error) {
            setHasConfirmError(true);
            setIsConfirming(false);
            return;
        }

        setIsConfirming(false);

        const [, loginError] = await api.login(fields.email, fields.password);

        if (!loginError) {
            dispatch(loginSuccess());
        }
    };

    const validateConfirmationForm = React.useCallback(() => !!fields.confirmationCode, [fields]);

    const renderConfirmationForm = () => {
        return (
            <Form onSubmit={handleConfirmSubmit}>
                {hasConfirmError ? <Alert variant="danger">Confirmation code incorrect.</Alert> : null}
                <Form.Group controlId="confirmationCode">
                    <Form.Label>Confirmation Code</Form.Label>
                    <Form.Control autoFocus type="tel" onChange={setFields} value={fields.confirmationCode} />
                    <div className="subtitle">Please check your email for the code.</div>
                </Form.Group>
                <AsyncButton block type="submit" isLoading={isConfirming} disabled={!validateConfirmationForm()}>
                    Verify
                </AsyncButton>
            </Form>
        );
    };

    const validateSignUpForm = React.useCallback(
        () => !!fields.email && !!fields.password && !!fields.confirmPassword,
        [fields]
    );

    const renderForm = () => {
        return (
            <Form onSubmit={handleSignUpSubmit}>
                {hasSignUpError ? (
                    <Alert variant="danger">
                        Password must be 8 lowercase and uppercase characters long at least, contain a number and
                        contain a symbol.
                    </Alert>
                ) : null}
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={fields.email} onChange={setFields} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields.password} onChange={setFields} />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onChange={setFields} value={fields.confirmPassword} />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={isSigningUp} disabled={!validateSignUpForm()}>
                    Signup
                </AsyncButton>
            </Form>
        );
    };

    return <Page className="sign-up-page">{!hasSignedUp ? renderForm() : renderConfirmationForm()}</Page>;
};
