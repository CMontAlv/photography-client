import React from 'react';

import './styles.css';

type Props = {
    className?: string;
};

export const Page: React.FunctionComponent<Props> = ({ className, children }) => {
    return <div className={`page ${className}`}>{children}</div>;
};
