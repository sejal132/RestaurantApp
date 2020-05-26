import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import Dish from './DishdetailComponent'

//when a particular dish is clicked the onClick calls the onDishSelect(dish) method which sets 
//the state of the component to the currently clicked dish.
//now the renderDish(dish) method can be called by passing the current state as the parameter dish.

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null

        }
        console.log('Menu component constructor invoked');
        
    }

    componentDidMount(){
        console.log('Menu component componentDidMount invoked');
        
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
               <Dish selectDish={dish}/>   
               </div>     
                   );



        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu component render invoked');
        
        return (
            <div className="container">
                <div className="row">

                    {menu}


                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)} 
                    {/* This ensures that the renderDish method is called on the currently clicked dish */}
                </div>
            </div>

        );

    }
}
export default Menu;