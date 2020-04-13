import * as React from 'react';
import { Card } from 'react-bootstrap';

import { S3PrivateImage } from '../s3-private-image';

import './styles.css';

type Props = {
    content: string;
    photoKey?: string;
    createdAt?: number;
};

export const EntryMiniature = React.memo<Props>(({ content, photoKey }) => {
    return (
        <Card className="entry-miniature">
            {photoKey ? <S3PrivateImage imageKey={photoKey} /> : null}
            <Card.Body>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
});
