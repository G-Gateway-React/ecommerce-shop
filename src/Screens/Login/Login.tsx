import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Checkbox, FormControlLabel } from '@mui/material';
import Button from '../../Components/Buttonn/Button';
import Link from '@mui/material/Link';
import { FormControl, FormLogin, FormParent, LinkRegister } from './Style';

const ariaLabel = { 'aria-label': 'description' };

export default function LoginForm() {
  return (
    <>
    <FormParent>
      <FormLogin>
      <h2>SIGN IN</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 }, width:"100%",
      }}
      noValidate
      autoComplete="off"
    >
     
      <Input placeholder="Email Address" inputProps={ariaLabel} sx={{width:"100%"}} />
  
    </Box>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },  width:"100%",
      }}
      noValidate
      autoComplete="off"
    >
     
      <Input placeholder="Password" inputProps={ariaLabel} sx={{width:"100%"}} />
  
    </Box>
         <FormControl control={<Checkbox defaultChecked />} label="Remember Me" />
      <Button name=" REGISTER NOW" />
      <LinkRegister href="#" underline="always" sx={{marginTop:"40px" , color:"#D1094B" , textDecoration:"#D1094B block"}}>
       {'I DON’T HAVE AN ACCOUNT ! CREATE ACCOUNT'}
        </LinkRegister>
        </FormLogin>
      </FormParent >
    
        </>
  );
}