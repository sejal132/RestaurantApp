import React, { Component } from 'react';
//import logo from './logo.svg';


import Dish from './DishdetailComponent'
import Menu from './MenuComponent';//default export imported with own name
import { Dishes } from '../shared/dishes'; //named import export should be written in braces
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      selectedDish: null
    };
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route  exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
          <Redirect to ="/home" />
        </Switch>
        <Footer />

      </div>
    );
  }
}




export default Main;
