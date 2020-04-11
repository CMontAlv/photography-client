import { application, applicationInitialState } from './application';
import { StoreState } from './types';

import { combineReducers } from '../utils/combine-reducers';

export const storeInitialState: StoreState = {
    application: applicationInitialState,
};

export const rootReducer = combineReducers({
    application,
});
