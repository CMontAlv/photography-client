import {
    FETCH_ENTRIES,
    RECEIVE_ENTRIES,
    FETCH_ENTRIES_ERROR,
    CREATE_NEW_ENTRY,
    CREATE_NEW_ENTRY_SUCCESS,
    CREATE_NEW_ENTRY_ERROR,
} from './constants';
import { Entry } from './types';
import { Action } from '../types';

export type EntriesState = {
    entries: Array<Entry>;
    fetchEntriesError: boolean;
    createNewEntryError: boolean;
};

export const entriesInitialState: EntriesState = {
    entries: [],
    fetchEntriesError: false,
    createNewEntryError: false,
};

export const entries = (state: EntriesState, action: Action) => {
    switch (action.type) {
        case FETCH_ENTRIES:
            return {
                ...state,
                fetchEntriesError: false,
            };
        case RECEIVE_ENTRIES:
            return {
                ...state,
                entries: action.payload,
            };
        case FETCH_ENTRIES_ERROR:
            return {
                ...state,
                fetchEntriesError: true,
            };
        case CREATE_NEW_ENTRY:
            return {
                ...state,
                createNewEntryError: false,
            };
        case CREATE_NEW_ENTRY_SUCCESS:
            return {
                ...state,
                entries: [action.payload].concat(state.entries),
            };
        case CREATE_NEW_ENTRY_ERROR:
            return {
                ...state,
                createNewEntryError: true,
            };
        default:
            return state;
    }
};
