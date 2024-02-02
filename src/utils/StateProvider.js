import { createContext , useContext, useReducer } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children , initialState , reducer}) => {

    return(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateProvider = () => (useContext(StateContext))
