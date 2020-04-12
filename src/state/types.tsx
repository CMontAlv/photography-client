import { ApplicationState } from './application';
import { EntriesState } from './entries';

export type StoreState = {
    application: ApplicationState;
    entries: EntriesState;
};

export type Action = {
    type: string;
    payload?: any;
};

export type Selector = (state: StoreState) => any;

export type Reducer = (state: StoreState, action: Action) => StoreState;
