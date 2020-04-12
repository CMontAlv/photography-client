import { API } from 'aws-amplify';

import { config } from '../../config';
import { s3Upload } from '../s3';

export const createEntry = async (file: any, content: string): Promise<[any, Error | null]> => {
    try {
        const attachment = file.current ? await s3Upload(file.current) : null;

        const result = await API.post(config.apiGateway.API_NAME, '/entries', {
            body: { content, attachment },
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
