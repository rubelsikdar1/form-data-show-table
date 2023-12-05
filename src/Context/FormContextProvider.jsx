/* eslint-disable react/prop-types */

import { useState } from 'react';
import createContext from './createContext';


const FormContextProvider = ({children}) => {
    const [formData, setFormData] = useState();
    return (
        <createContext.Provider value={{formData,setFormData}}>
            {children}
        </createContext.Provider>
    );
};

export default FormContextProvider;