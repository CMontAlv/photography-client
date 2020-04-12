import { application, applicationInitialState } from './application';
import { entries, entriesInitialState } from './entries';
import { StoreState } from './types';

import { combineReducers } from '../utils/combine-reducers';

export const storeInitialState: StoreState = {
    application: applicationInitialState,
    entries: entriesInitialState,
};

export const rootReducer = combineReducers({
    application,
    entries,
});
