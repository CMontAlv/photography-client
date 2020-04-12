import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { api } from '../../api/entries';

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
    };

    React.useEffect(() => {
        loadEntries();
    }, []);

    return (
        <Page className="entries-page">
            {entries.length ? (
                'These are your entries'
            ) : (
                <div>
                    <p>Seems like you don't have any entries yet.</p>
                    <Button onClick={goToCreateNewEntry}>Create new entry</Button>
                </div>
            )}
        </Page>
    );
};
