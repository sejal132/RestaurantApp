import React,{Component} from 'react';
//import logo from './logo.svg';

import './App.css';
import Main from './components/MainComponent';//default export imported with own name
import {BrowserRouter} from 'react-router-dom';

  class App extends Component{
   

    render(){
  return (
    <BrowserRouter>
    <div>
      <Main/>
      
    </div>
    </BrowserRouter>
  );
}
}

export default App;
