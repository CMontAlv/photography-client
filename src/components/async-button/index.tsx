import * as React from 'react';
import { Button } from 'react-bootstrap';
import { GoGear } from 'react-icons/go';

import './styles.css';

type Props = {
    isLoading: boolean;
    className?: string;
    disabled?: boolean;
} & React.ComponentProps<typeof Button>;

export const AsyncButton: React.FunctionComponent<Props> = ({
    isLoading,
    className = '',
    disabled = false,
    ...props
}) => {
    return (
        <Button className={`async-button ${className}`} disabled={disabled || isLoading} {...props}>
            {isLoading && <GoGear className="spinning" />}
            {props.children}
        </Button>
    );
};
