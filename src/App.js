import React,{Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';//default export imported with own name
import {Dishes} from './shared/dishes'; //named import export should be written in braces


  class App extends Component{
    constructor(props){
      super(props);
      this.state={
        dishes:Dishes
      };
    }


    render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
      
    </div>
  );
}
}

export default App;
