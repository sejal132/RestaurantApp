import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

//when a particular dish is clicked the onClick calls the onDishSelect(dish) method which sets 
//the state of the component to the currently clicked dish.
//now the renderDish(dish) method can be called by passing the current state as the parameter dish.

    function RenderMenuItem({dish,onClick}) {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>

                    <CardImg width="100%" src={dish.image} alt={dish.name} />

                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>

                    </CardImgOverlay>
                </Card>
            </div>
        );


    }
    

    const Menu =(props)=>{
        const menu = props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            )
            
        });
        

        return (
            <div className="container">
                <div className="row">

                    {menu}


                </div>
                <div className="row">
                    
                </div>
            </div>

        );

    }



    

export default Menu;