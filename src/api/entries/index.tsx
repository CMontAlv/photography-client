import { API } from 'aws-amplify';

import { config } from '../../config';
import { s3Upload } from '../s3';

export const createEntry = async (file: any, content: string): Promise<[any, Error | null]> => {
    try {
        const photoKey = file ? await s3Upload(file) : null;

        const result = await API.post(config.apiGateway.API_NAME, '/entries', {
            body: { content, photoKey },
        });

        return [result, null];
    } catch (e) {
        return [null, e];
    }
};

export const getEntries = async (): Promise<[any, Error | null]> => {
    try {
        const result = await API.get(config.apiGateway.API_NAME, '/entries', {});

        return [result, null];
    } catch (e) {
        return [null, e];
    }
};

export const api = {
    createEntry,
    getEntries,
};
