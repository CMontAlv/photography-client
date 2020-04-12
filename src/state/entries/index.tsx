import {
    FETCH_ENTRIES,
    RECEIVE_ENTRIES,
    FETCH_ENTRIES_ERROR,
    CREATE_NEW_NOTE,
    CREATE_NEW_NOTE_SUCCESS,
    CREATE_NEW_NOTE_ERROR,
} from './constants';
import { Entry } from './types';
import { Action } from '../types';

export type EntriesState = {
    entries: Array<Entry>;
    fetchEntriesError: boolean;
    createNewNoteError: boolean;
};

export const entriesInitialState: EntriesState = {
    entries: [],
    fetchEntriesError: false,
    createNewNoteError: false,
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
        case CREATE_NEW_NOTE:
            return {
                ...state,
                createNewNoteError: false,
            };
        case CREATE_NEW_NOTE_SUCCESS:
            return {
                ...state,
                entries: [action.payload].concat(state.entries),
            };
        case CREATE_NEW_NOTE_ERROR:
            return {
                ...state,
                createNewNoteError: true,
            };
        default:
            return state;
    }
};
