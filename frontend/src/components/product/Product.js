import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component' 
import './product.css'
import { Container, styled, Typography } from '@mui/material'

const PriceText = styled(Typography)(({ theme }) =>({
    margin: '0.5vmax 0.5vmax',
    color: 'tomato',
    fontSize: '1.5vmax',
    [theme.breakpoints.down('md')]:{
        fontSize: '2vmax',
    }

}));
const TitleText = styled(Typography)(({ theme }) =>({
    
    margin: '1vmax 0.5vmax',
    marginBottom: 0,
    fontSize: '1.5vmax',
    [theme.breakpoints.down('md')]:{
        fontSize: '2vmax',
    }

}));
const ReviewText = styled(Typography)(({ theme }) =>({
    
    margin: '0.5vmax',
    fontSize: '1vmax',
    [theme.breakpoints.down('md')]:{
        fontSize: '1.5vmax',
        margin: '0 0.5vmax',
    }

}));
const DivStarReview = styled(Container)(({ theme }) =>({
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0.5vmax',

    [theme.breakpoints.down('md')]:{
        margin: 0,
    }

}));


const Product = ({ product }) => {
    const options = {
        edit:false,
        color:"#B0B4B8",
        activeColor: "tomato",
        value: product.ratings,
        size: window.innerWidth < 900 ? 15 : 25,
        isHalf: true,
    }
  return (
    <Link className='templateCard' to={product._id}>
        <img
            src={product.image[0].url} alt={product.title}
        />
        <TitleText sx={{
            margin: '1vmax 0.5vmax',
            marginBottom: 0,
            fontSize: '1.5vmax',

        }}>{product.title}</TitleText>
        <DivStarReview>
            <ReactStars {...options} /> <ReviewText variant='span'>({product.
numOfReviews} Reviews)</ReviewText>
        </DivStarReview>
        <PriceText variant='span' sx={{
            
        }}>{`Rs.${product.price}`}</PriceText>
    </Link>
  )
}

export default Product