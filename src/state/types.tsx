import { ApplicationState } from './application';
import { ApplicationActions } from './application/actions';
import { EntriesState } from './entries';
import { EntriesActions } from './entries/actions';

export type StoreState = {
    application: ApplicationState;
    entries: EntriesState;
};

export type Action = ApplicationActions | EntriesActions;

export type Selector<T> = (state: StoreState, props?: any) => T;

export type Reducer = (state: StoreState, action: Action) => StoreState;
