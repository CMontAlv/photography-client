import {
    FETCH_ENTRIES,
    RECEIVE_ENTRIES,
    FETCH_ENTRIES_ERROR,
    CREATE_NEW_NOTE,
    CREATE_NEW_NOTE_SUCCESS,
    CREATE_NEW_NOTE_ERROR,
} from './constants';
import { Entry } from './types';

export type FetchEntriesAction = {
    type: typeof FETCH_ENTRIES;
};
export const fetchEntries = (): FetchEntriesAction => ({
    type: FETCH_ENTRIES,
});

export type ReceiveEntriesPayload = Array<Entry>;
export type ReceiveEntriesAction = {
    type: typeof RECEIVE_ENTRIES;
    payload: ReceiveEntriesPayload;
};
export const receiveEntries = (payload: ReceiveEntriesPayload): ReceiveEntriesAction => ({
    type: RECEIVE_ENTRIES,
    payload,
});

export type FetchEntriesErrorAction = {
    type: typeof FETCH_ENTRIES_ERROR;
};
export const fetchEntriesError = (): FetchEntriesErrorAction => ({
    type: FETCH_ENTRIES_ERROR,
});

export type CreateNewNotePayload = Entry;
export type CreateNewNoteAction = {
    type: typeof CREATE_NEW_NOTE;
    payload: CreateNewNotePayload;
};
export const createNewNote = (payload: CreateNewNotePayload): CreateNewNoteAction => ({
    type: CREATE_NEW_NOTE,
    payload,
});

export type CreateNewNoteSuccessPayload = Entry;
export type CreateNewNoteSuccessAction = {
    type: typeof CREATE_NEW_NOTE_SUCCESS;
    payload: CreateNewNoteSuccessPayload;
};
export const createNewNoteSuccess = (payload: CreateNewNoteSuccessPayload): CreateNewNoteSuccessAction => ({
    type: CREATE_NEW_NOTE_SUCCESS,
    payload,
});

export type CreateNewNoteErrorAction = {
    type: typeof CREATE_NEW_NOTE_ERROR;
};
export const createNewNoteError = (): CreateNewNoteErrorAction => ({
    type: CREATE_NEW_NOTE_ERROR,
});

export type EntriesAction =
    | FetchEntriesAction
    | ReceiveEntriesAction
    | FetchEntriesErrorAction
    | CreateNewNoteAction
    | CreateNewNoteSuccessAction
    | CreateNewNoteErrorAction;
