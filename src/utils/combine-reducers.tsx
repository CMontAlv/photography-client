import { Reducer, Action, StoreState } from '../state/types';

type StoreKeys = keyof StoreState;

type ReducersObjectType = {
    [key in StoreKeys]: (state: any, action: Action) => any;
};

type InnerFunctionReturnType = (state: any) => any;

export const combineReducers = (reducers: ReducersObjectType): Reducer => {
    return (state: StoreState, action: Action): StoreState => {
        // @ts-ignore TODO - investigate this
        return Object.keys(reducers).reduce((nextState: StoreState, key: StoreKeys) => {
            // Call the corresponding reducer function for a given key
            const reducer = reducers[key];
            const previousStateForKey = state[key];

            nextState[key] = reducer(previousStateForKey, action);

            return nextState;
        }, {});
    };
};
