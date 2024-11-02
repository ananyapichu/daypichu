import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [product,setproduct]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((respont) =>{
            setproduct(respont.data);
        })
    },[]);

  return (
    <Grid container spacing={2}>
        {product.map((post) =>{
            return ( 
       <Grid item xs={2} sa={6} md={4} key={post.id}>
        <card>
            <CardMedia
            sx={{height: 140 }}
            image={post.image}
            title="green iguana"/>
            <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="h6">{post.price}</Typography>
                <Typography variant="h6">{post.category}</Typography>
             
            </CardContent>
        </card>
       </Grid>    
            ) 
        })}
    </Grid>   
  )
}

export default Home