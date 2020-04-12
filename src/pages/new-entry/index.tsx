import * as React from 'react';
import { Form } from 'react-bootstrap';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import './styles.css';

export const NewEntry: React.FunctionComponent = () => {
    const file = React.useRef(null);
    const [content, setContent] = React.useState('');

    const handleContentChange = React.useCallback((e) => setContent(e.target.value), [setContent]);

    const handleFileChange = React.useCallback((e) => {
        file.current = e.target.files[0];
    }, []);

    const handleSubmit = React.useCallback(() => {}, []);

    return (
        <Page className="new-entry-page">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="content">
                    <Form.Control value={content} as="textarea" onChange={handleContentChange} />
                </Form.Group>
                <Form.Group controlId="file">
                    <Form.Label>Attachment</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" accept="image/*" />
                </Form.Group>
                <AsyncButton block type="submit" bsSize="large" bsStyle="primary" isLoading={false} disabled={false}>
                    Create
                </AsyncButton>
            </Form>
        </Page>
    );
};
