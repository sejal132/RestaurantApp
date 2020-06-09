import React, { Component } from 'react';
//import logo from './logo.svg';


import Dish from './DishdetailComponent'
import Menu from './MenuComponent';//default export imported with own name
import { Dishes } from '../shared/dishes'; //named import export should be written in braces
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
        {
          this.state.selectedDish !== null ?
            <div>
              <Dish selectDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div> :
            <div>
            </div >
        }
        <Footer />

      </div>
    );
  }
}




export default Main;
