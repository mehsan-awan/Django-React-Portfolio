import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [apiData, setapiData] = useState(null);
    
    const loadingFunction = async() => {
        try{
                const data  = await axios.get("http://127.0.0.1:8000/api/620ca8490e4cc1a095d0da10/")
                // const data = response.JSON();
                // console.log(data);
                setapiData(data.data[0])
                // const response = await axios.get(`http://127.0.0.1:8000/api/620ca8490e4cc1a095d0da10/`)
                // setData(response.data[0])
        }
        catch(e){
            console.log(e)
        }
    };

    useEffect( () => {
            loadingFunction()
        },[])


    return (
            <DataContext.Provider value={{ apiData }}>
                
                {apiData != null && children}
              
            </DataContext.Provider>
        );
    };
export default DataContextProvider;