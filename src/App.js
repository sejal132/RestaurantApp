import React,{Component} from 'react';
//import logo from './logo.svg';

import './App.css';
import Main from './components/MainComponent';//default export imported with own name

  class App extends Component{
   

    render(){
  return (
    <div>
      <Main/>
      
    </div>
  );
}
}

export default App;
