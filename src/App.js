import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from '../src/Components/Main/Main';
//import MainContent from './Components/MainContent/MainContent';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
