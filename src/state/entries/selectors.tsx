import { createSelector } from 'reselect';

import { EntriesState } from './';
import { Entry } from './types';
import { StoreState } from '../types';

const getState = (state: StoreState): EntriesState => state.entries;

export const getEntries: (state: StoreState) => Array<Entry> = createSelector([getState], (state) => state.entries);

export const getFetchEntriesError: (state: StoreState) => boolean = createSelector(
    [getState],
    (state) => state.fetchEntriesError
);

export const getCreateNewNoteError: (state: StoreState) => boolean = createSelector(
    [getState],
    (state) => state.createNewNoteError
);
