import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div className='addpro'>
      <TextField class="formfield" id="outlined-basic" label="productName" variant="outlined"/><br/>
      <TextField class="formfield" id="outlined-multiline-flexible" label="Description" multline maxrows={4}/><br/>
      <TextField class="formfield" id="outlined-multiline-flexible" label="price" variant="outlined"/><br/>
      <TextField class="formfield" id="outlined-multiline-flexible" label="category" variant="outlined"/><br/>
<Button class="formbtn">submit</Button>
<Button class="formbtn">reset</Button>
    </div>
  )
}

export default Add