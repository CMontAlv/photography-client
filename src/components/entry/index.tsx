import * as React from 'react';
import { Card } from 'react-bootstrap';

import { S3PrivateImage } from '../s3-private-image';

type Props = {
    content: string;
    attachment?: string;
    createdAt?: number;
};

export const Entry = React.memo<Props>(({ content, attachment }) => {
    return (
        <Card>
            {attachment ? <S3PrivateImage key={attachment} /> : null}
            <Card.Text>{content}</Card.Text>
        </Card>
    );
});
