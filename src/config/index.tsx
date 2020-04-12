export const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_PW2mD3bO1tbxTWvLmukz94Dr00zIhUGldv',
    s3: {
        REGION: 'eu-west-2',
        BUCKET: 'photography-api-dev-attachmentsbucket-1evhtkr40q8v4',
    },
    apiGateway: {
        API_NAME: 'dev-photography-api',
        REGION: 'eu-west-2',
        URL: 'https://gudsn1mku4.execute-api.eu-west-2.amazonaws.com/prod',
    },
    cognito: {
        REGION: 'eu-west-2',
        USER_POOL_ID: 'eu-west-2_wMm5BEYwP',
        APP_CLIENT_ID: '5cglp8j257pv96e7n10tscib37',
        IDENTITY_POOL_ID: 'eu-west-2:df71faa6-b0c2-458d-bac2-fc367fd17cac',
    },
};
