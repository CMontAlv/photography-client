import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { Page } from '../../components/page';

import * as routes from '../../constants/routes';

import { getEntries } from '../../state/entries/selectors';
import { useSelector } from '../../state/store';

export const Home: React.FunctionComponent = () => {
    const history = useHistory();

    const entries = useSelector(getEntries);

    const goToCreateNewEntry = React.useCallback(() => {
        history.push(routes.newEntry);
    }, [history]);

    return (
        <Page className="entries-page">
            {entries.length ? (
                'This are your entries'
            ) : (
                <div>
                    <p>Seems like you don't have any entries yet.</p>
                    <Button onClick={goToCreateNewEntry}>Create new entry</Button>
                </div>
            )}
        </Page>
    );
};
