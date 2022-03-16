import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Site from './components/site';
import { usePageVisibility } from 'react-page-visibility';

const App = () => {

  const isVisible = usePageVisibility()

  useEffect(() => {
    if(document.visibilityState === "visible"){
    document.title = "Ehsan Web Portfolio"
    }
    else {
      document.title = "Come Back To Ehsan Portfolio";     
  }
  }, [isVisible])

    return(
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Site />} />
          </Routes>
      </div>
    </BrowserRouter>
    </>
)
};

export default App;
