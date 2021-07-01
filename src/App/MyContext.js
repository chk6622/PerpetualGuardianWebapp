import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';



export const AppContext = createContext({});

const InitState = []

const MyContext = props => {

    const [fileInformationList, dispatch] = useReducer(AppReducer, InitState);

    return (
        <AppContext.Provider value={{ fileInformationList, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default MyContext;



