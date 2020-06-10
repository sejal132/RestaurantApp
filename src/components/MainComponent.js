import React, { Component } from 'react';
//import logo from './logo.svg';


import Dish from './DishdetailComponent'
import Menu from './MenuComponent';//default export imported with own name
import { Dishes}  from '../shared/dishes'; //named import export should be written in braces
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Route, Switch, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
    };
  }


  render() {
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
              promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        />

      )
    }
    return (

      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route  exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to ="/home" />
        </Switch>
        <Footer />

      </div>
    );
  }
}




export default Main;
