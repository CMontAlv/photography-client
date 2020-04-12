import * as React from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Storage } from 'aws-amplify';

import { api } from '../../api/entries';

import { Entry } from '../../components/entry';
import { Page } from '../../components/page';

import * as routes from '../../constants/routes';

import { fetchEntries, receiveEntries, fetchEntriesError } from '../../state/entries/actions';
import { getEntries } from '../../state/entries/selectors';
import { useSelector, useDispatch } from '../../state/store';

export const Entries: React.FunctionComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const entries = useSelector(getEntries);

    const goToCreateNewEntry = React.useCallback(() => {
        history.push(routes.newEntry);
    }, [history]);

    const loadEntries = async () => {
        dispatch(fetchEntries());
        const [entries, error] = await api.getEntries();

        if (error) {
            dispatch(fetchEntriesError());
            return;
        }

        dispatch(receiveEntries(entries));

        const result = await Storage.list('', { level: 'private' });

        console.log(result);
    };

    React.useEffect(() => {
        loadEntries();
    }, []);

    return (
        <Page className="entries-page">
            {entries.length ? (
                <Container>
                    <Row>
                        {entries
                            .concat(entries)
                            .concat(entries)
                            .concat(entries)
                            .map(({ content, attachment }) => (
                                <Col xs={6}>
                                    <Entry content={content} attachment={attachment} />
                                </Col>
                            ))}
                    </Row>
                </Container>
            ) : (
                <div>
                    <p>Seems like you don't have any entries yet.</p>
                    <Button onClick={goToCreateNewEntry}>Create new entry</Button>
                </div>
            )}
        </Page>
    );
};
