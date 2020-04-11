import { createSelector } from 'reselect';

import { ApplicationState } from './';
import { StoreState } from '../types';

const getState = (state: StoreState): ApplicationState => state.application;

export const getIsLoggedIn: (state: StoreState) => boolean = createSelector([getState], (state) => state.isLoggedIn);
