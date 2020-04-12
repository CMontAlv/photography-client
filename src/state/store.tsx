import * as React from 'react';

import { rootReducer, storeInitialState } from '.';
import { Selector, Action } from './types';

export const StoreContext = React.createContext({
    state: storeInitialState,
    dispatch: (action: Action) => {},
});

export const useDispatch = () => {
    const { dispatch } = React.useContext(StoreContext);

    return dispatch;
};

export function useSelector<T>(selector: Selector<T>): T {
    const { state } = React.useContext(StoreContext);

    return selector(state);
}

export const StateProvider: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = React.useReducer(rootReducer, storeInitialState);

    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
