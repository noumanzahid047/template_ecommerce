import React, { Fragment, useEffect } from 'react'
import "./home.css"
import { styled, Container, Typography } from '@mui/material'
import Product from '../product/Product'
import { getProducts } from '../../actions/productAction'
import {useSelector, useDispatch } from 'react-redux'


const product = {
  name: 'Template 1',
  images: [{ url: 'https://ibb.co/X21CBnf'}],
  price: 'Rs. 1200',
  _id: 'Nouman'
}
const ProductDiv = styled(Container)(({ theme }) =>({
    
  display: 'flex',
  margin: '2vmax  auto',
  width: '80vw',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '100%',
  alignItems: 'center',


  [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
  }

}));

const Home = () => {

  const dispatch = useDispatch();
  const { loading, error, products, productCount} = useSelector( (state) => state.products
  );
  useEffect(() => {
    
    dispatch(getProducts());

  }, [dispatch]);

  return (
    <Fragment>
      <div className='home_main'>
        <div className="home">
          <Typography variant='h1' sx={{
            margin: '5vmax'}}>
              The Best Notion Templates Gallery
          </Typography>
          <Typography variant='span' sx={{
            color: '#333333',
            margin: '5vmax'
          }}>
          We have a huge variety of Notion templates and tools that will help in a range of personal and business settings.
          </Typography>
        </div>
        <Typography variant='h6' sx={{
          color: '#333333',
          margin: `${5}vmax auto`,
          borderBottom: `${1}px Solid`,
          padding: '1vmax',
        }}>Find the Notion templates that will make you more productive</Typography>
        <ProductDiv id='productDiv'>
          {products && products.map((product) =>  <Product product={product}/> )}
        </ProductDiv>
      </div>
    </Fragment>
  )
}

export default Home