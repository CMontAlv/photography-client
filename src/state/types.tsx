import { ApplicationState } from './application';

export type StoreState = {
    application: ApplicationState;
};

export type Action = {
    type: string;
    payload?: any;
};

export type Selector = (state: StoreState) => any;

export type Reducer = (state: StoreState, action: Action) => StoreState;
