import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <AppBar sx={{background: 'rgb(238,174,202)',
background: 'radial-gradient(circle, rgba(238,174,202,1) 11%, rgba(38,50,130,1) 51%)'}} >
        
            <Toolbar>
         <Typography variant="h6" color="inherit" component="div">
    My_App
  </Typography><br /><br />
  <Link to='/h'>
  <Button variant='contained' color='success'> Home</Button>
  </Link>&nbsp;&nbsp;&nbsp;
  <Link to='/a'>
  <Button variant='contained' color='success'>Add</Button>
  </Link>&nbsp;&nbsp;&nbsp;
 
  </Toolbar>
  </AppBar><br /><br /><br /></div>
  )
}

export default Navbar