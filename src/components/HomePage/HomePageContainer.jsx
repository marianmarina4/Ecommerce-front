import React, { useEffect } from 'react';
import HomePageComponent from "./HomePageComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/slices/productSlice";

function HomePageContainer() {
  const allProducts = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();

  function handleOnClick(productId) {
    console.log("ea")
    //navigate to productPage
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, []);

  return (
    <HomePageComponent
      arrayProducts={allProducts}
      handleOnClick={handleOnClick}
    />
  )
};

export default HomePageContainer;