// import * as React from 'react';
// import { S3Image } from 'aws-amplify-react';

// import './styles.css';

// type Props = {
//     key: string;
// };

// export const S3PrivateImage = React.memo<Props>(({ key }) => {
//     return <S3Image className="s3-private-image" level="private" key={key} />;
// });

import * as React from 'react';
import { Storage } from 'aws-amplify';

import './styles.css';

type Props = {
    imageKey: string;
};

export const S3PrivateImage = React.memo<Props>(({ imageKey }) => {
    const [url, setUrl] = React.useState<string | undefined>(undefined);

    const loadUrl = async () => {
        try {
            const url = await Storage.get(imageKey, { level: 'private' });

            setUrl(typeof url === 'string' ? url : undefined);
        } catch (e) {}
    };

    React.useEffect(() => {
        loadUrl();
    }, []);

    return <img className="s3-private-image" src={url} />;
});
