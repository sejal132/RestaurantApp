import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';




    

   function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </Card>


            );





        } else {
            return (
                <div>

                </div>
            );
        }

    }


  function  RenderComments({comments}) {
        if (comments != null) {
            const list = comments.map((comment) => {
                return (
                    <div>

                        <p>{comment.comment}</p>
                        <p>--{comment.author},{comment.date}</p>
                    </div>

                );
            })

            return (
                <div>
                    <h4>Comments</h4>
                    {list}
                </div>



            );
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }


    const Dish=(props)=> {
        const dish = props.selectDish;
        
        



        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />


                    </div> 
                    <div className="col-12 col-md-5 m-1">
                        
                    <RenderComments comments={dish.comments} />

                    </div>

                </div>
            </div>

        );
    }


export default Dish;