import { Storage } from 'aws-amplify';

export const s3Upload = async (file: any) => {
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type,
    });

    // @ts-ignore
    return stored.key;
};

export async function s3Delete(filename: any) {
    return await Storage.vault.remove(filename);
}
