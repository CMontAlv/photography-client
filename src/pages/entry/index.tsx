import * as React from 'react';
import { Form } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

import { api } from '../../api/entries';

import { AsyncButton } from '../../components/async-button';
import { S3PrivateImage } from '../../components/s3-private-image';
import { Page } from '../../components/page';
import { NotFound } from '../../components/not-found';

import * as routes from '../../constants/routes';

import { updateEntry, updateEntryError, updateEntrySuccess } from '../../state/entries/actions';
import { getEntryById } from '../../state/entries/selectors';
import { useDispatch, useSelector } from '../../state/store';

import './styles.css';

export const Entry: React.FunctionComponent = () => {
    const { entryId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const { content, photoKey } = useSelector((state) => getEntryById(state, { entryId })) || {};

    const file = React.useRef(null);
    const [entryContent, setContent] = React.useState(content || '');
    const [isUploadingEntry, setIsUploadingEntry] = React.useState(false);

    const handleContentChange = React.useCallback((e) => setContent(e.target.value), [setContent]);

    const handleFileChange = React.useCallback(
        (e) => {
            file.current = e.target.files[0];
        },
        [file]
    );

    const handleSubmit = React.useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (entryId && photoKey && (entryContent || file.current)) {
                setIsUploadingEntry(true);
                dispatch(updateEntry());

                const [result, error] = await api.updateEntry({
                    entryId,
                    oldPhotoKey: photoKey,
                    newFile: file.current,
                    newContent: entryContent,
                });

                if (error) {
                    dispatch(updateEntryError());
                    return;
                }

                dispatch(updateEntrySuccess({ entryId, content: result.content, photoKey: result.photoKey }));
                setIsUploadingEntry(false);
            }
        },
        [entryId, photoKey, entryContent, file, dispatch]
    );

    const deleteHandler = React.useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (entryId) {
            const [, error] = await api.deleteEntry(entryId);

            if (!error) {
                history.push(routes.home);
            }
        }
    }, []);

    if (!content || !photoKey) {
        return <NotFound />;
    }

    return (
        <Page className="entry-page">
            <Form onSubmit={handleSubmit}>
                <S3PrivateImage imageKey={photoKey} />
                <Form.Group controlId="content">
                    <Form.Control value={entryContent} as="textarea" onChange={handleContentChange} />
                </Form.Group>
                <Form.Group controlId="file">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" accept="image/*" />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={isUploadingEntry} disabled={!content}>
                    Update
                </AsyncButton>
                <AsyncButton block onClick={deleteHandler} isLoading={false} variant="danger">
                    Delete
                </AsyncButton>
            </Form>
        </Page>
    );
};
