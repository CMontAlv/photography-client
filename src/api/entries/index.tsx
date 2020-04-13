import { API } from 'aws-amplify';

import { s3Upload, s3Delete } from '../s3';
import { config } from '../../config';
import { Entry } from '../../state/entries/types';

type createReturnType = [Entry, null] | [null, Error];

export const createEntry = async (file: any, content: string): Promise<createReturnType> => {
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

export const updateEntry = async ({
    entryId,
    newContent,
    oldPhotoKey,
    newFile,
}: {
    entryId: string;
    newContent: string;
    oldPhotoKey: string;
    newFile?: any;
}): Promise<[any, Error | null]> => {
    try {
        if (newFile) {
            await s3Delete(oldPhotoKey);
        }

        const photoKey = newFile ? await s3Upload(newFile) : oldPhotoKey;

        const result = await API.put(config.apiGateway.API_NAME, `/entries/${entryId}`, {
            body: { content: newContent, photoKey },
        });

        return [result, null];
    } catch (e) {
        return [null, e];
    }
};

export const deleteEntry = async (entryId: string): Promise<[any, Error | null]> => {
    try {
        const result = await API.del(config.apiGateway.API_NAME, `/entries/${entryId}`, {});

        return [result, null];
    } catch (e) {
        return [null, e];
    }
};

export const api = {
    createEntry,
    getEntries,
    updateEntry,
    deleteEntry,
};
