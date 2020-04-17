import { EntriesActions } from './actions';

import {
    FETCH_ENTRIES,
    RECEIVE_ENTRIES,
    FETCH_ENTRIES_ERROR,
    CREATE_NEW_ENTRY,
    CREATE_NEW_ENTRY_SUCCESS,
    CREATE_NEW_ENTRY_ERROR,
    UPDATE_ENTRY,
    UPDATE_ENTRY_SUCCESS,
    UPDATE_ENTRY_ERROR,
} from './constants';
import { Entry } from './types';

export type EntriesState = {
    entries: Array<Entry>;
    fetchEntriesError: boolean;
    createNewEntryError: boolean;
    updateNewEntryError: boolean;
};

export const entriesInitialState: EntriesState = {
    entries: [],
    fetchEntriesError: false,
    createNewEntryError: false,
    updateNewEntryError: false,
};

export const entries = (state: EntriesState, action: EntriesActions) => {
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
        case UPDATE_ENTRY:
            return {
                ...state,
                updateNewEntryError: false,
            };
        case UPDATE_ENTRY_SUCCESS:
            const { entryId, content, photoKey } = action.payload;

            return {
                ...state,
                entries: state.entries.map((entry) =>
                    entry.entryId === entryId
                        ? {
                              ...entry,
                              ...(content ? { content } : {}),
                              ...(photoKey ? { photoKey } : {}),
                          }
                        : entry
                ),
            };
        case UPDATE_ENTRY_ERROR:
            return {
                ...state,
                updateNewEntryError: true,
            };
        default:
            return state;
    }
};
