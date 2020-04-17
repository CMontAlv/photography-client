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

export type CreateNewEntryAction = {
    type: typeof CREATE_NEW_ENTRY;
};
export const createNewEntry = (): CreateNewEntryAction => ({
    type: CREATE_NEW_ENTRY,
});

export type CreateNewEntrySuccessPayload = Entry;
export type CreateNewEntrySuccessAction = {
    type: typeof CREATE_NEW_ENTRY_SUCCESS;
    payload: CreateNewEntrySuccessPayload;
};
export const createNewEntrySuccess = (payload: CreateNewEntrySuccessPayload): CreateNewEntrySuccessAction => ({
    type: CREATE_NEW_ENTRY_SUCCESS,
    payload,
});

export type CreateNewEntryErrorAction = {
    type: typeof CREATE_NEW_ENTRY_ERROR;
};
export const createNewEntryError = (): CreateNewEntryErrorAction => ({
    type: CREATE_NEW_ENTRY_ERROR,
});

export type UpdateEntryAction = {
    type: typeof UPDATE_ENTRY;
};
export const updateEntry = (): UpdateEntryAction => ({
    type: UPDATE_ENTRY,
});

export type UpdateEntrySuccessPayload = { entryId: string; content: string; photoKey: string };
export type UpdateEntrySuccessAction = {
    type: typeof UPDATE_ENTRY_SUCCESS;
    payload: UpdateEntrySuccessPayload;
};
export const updateEntrySuccess = (payload: UpdateEntrySuccessPayload): UpdateEntrySuccessAction => ({
    type: UPDATE_ENTRY_SUCCESS,
    payload,
});

export type UpdateEntryErrorAction = {
    type: typeof UPDATE_ENTRY_ERROR;
};
export const updateEntryError = (): UpdateEntryErrorAction => ({
    type: UPDATE_ENTRY_ERROR,
});

export type EntriesActions =
    | FetchEntriesAction
    | ReceiveEntriesAction
    | FetchEntriesErrorAction
    | CreateNewEntryAction
    | CreateNewEntrySuccessAction
    | CreateNewEntryErrorAction
    | UpdateEntryAction
    | UpdateEntrySuccessAction
    | UpdateEntryErrorAction;
