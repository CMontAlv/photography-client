export const config = {
    MAX_PHOTO_SIZE: 5000000,
    s3: {
        REGION: process.env.REACT_APP_REGION,
        BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
        API_NAME: process.env.REACT_APP_API_NAME,
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
        APP_CLIENT_ID: process.env.REACT_APP_APP_CLIENT_ID,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
};
