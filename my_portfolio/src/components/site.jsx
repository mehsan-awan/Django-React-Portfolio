import React from 'react';
import Home from './home';
import About from './about';
import Education from './education';
import Experience from './exp';
import Skills from './skills';
import DataContextProvider from '../contexts/dataContext';
import Footer from './footer';

const Site = () => {
    
    return(  
        <>
            <DataContextProvider>
                <Home/>
                <About />
                <Skills/>
                <Education/>
                <Experience />
                <Footer/>
            </DataContextProvider>
        </>
    );
}

export default Site;

