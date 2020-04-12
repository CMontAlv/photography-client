import { createSelector } from 'reselect';

import { EntriesState } from './';
import { Entry } from './types';
import { StoreState, Selector } from '../types';

const getState = (state: StoreState): EntriesState => state.entries;

export const getEntries: Selector<Array<Entry>> = createSelector([getState], (state) => state.entries);

export const getFetchEntriesError: Selector<boolean> = createSelector([getState], (state) => state.fetchEntriesError);

export const getCreateNewEntryError: Selector<boolean> = createSelector(
    [getState],
    (state) => state.createNewEntryError
);
