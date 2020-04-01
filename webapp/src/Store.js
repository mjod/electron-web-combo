import React, {createContext, useReducer} from 'react';

const initialState = {
    interfaces: []
};
const store = createContext();

const storeReducer = (state, action) => {
    switch (action.type) {
        case "SETINTERFACES":
            return {
                ...state,
                interfaces: action.payload.interfaces
            };
        case "LOGOUT":
            return {
                ...state
            };
        default:
            return state;
    }
};

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const value = { state, dispatch };
    return (
      <store.Provider value={value}>
          {children}
      </store.Provider>
    );
}

export { store, StoreProvider }