import * as React from 'react';
import { Form } from 'react-bootstrap';

import { api } from '../../api/entries';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import { createNewEntry, createNewEntryError, createNewEntrySuccess } from '../../state/entries/actions';
import { useSelector, useDispatch } from '../../state/store';

import './styles.css';

export const NewEntry: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const file = React.useRef(null);
    const [content, setContent] = React.useState('');
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

            setIsUploadingEntry(true);
            dispatch(createNewEntry());

            const [result, error] = await api.createEntry(file.current, content);

            if (error) {
                dispatch(createNewEntryError());
                return;
            }

            dispatch(createNewEntrySuccess({ content: result.content, photoKey: result.photoKey }));
            setIsUploadingEntry(false);
        },
        [content, file, dispatch]
    );

    return (
        <Page className="new-entry-page">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="content">
                    <Form.Control value={content} as="textarea" onChange={handleContentChange} />
                </Form.Group>
                <Form.Group controlId="file">
                    <Form.Label>Attachment</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" accept="image/*" />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={isUploadingEntry} disabled={!content}>
                    Create
                </AsyncButton>
            </Form>
        </Page>
    );
};
