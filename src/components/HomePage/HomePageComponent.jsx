import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardHomePage from "./CardHomePage";
import Carousel from "./Carouseles";

function HomePageComponent(props) {

  const { arrayProducts, handleOnClick, handleOnCheck } = props;

  return (
    //Div Padre
    <div className='pb-5'>
      <Carousel />
      <Container>
        <div className='pt-5'>
          <Row md={4} xs={2} className='d-flex align-item-around' >
            {
              arrayProducts.map(product => (
                <CardHomePage 
                  product={product}
                  handleOnClick={handleOnClick}
                  />
              ))
            }
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default HomePageComponent;