import * as React from 'react';
import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
import { Checkbox, FormControlLabel } from '@mui/material';
import Button from '../../Components/Buttonn/Button';
import Link from '@mui/material/Link';
import { FormControl, FormLogin, FormParent, Input, LinkRegister } from './Style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/auth';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../store';
const ariaLabel = { 'aria-label': 'description' };

interface FormValues {
  email: string;
  password: string;
}
 const passwordValidation = {
  exp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
   msg: 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().matches(
    passwordValidation.exp,
    passwordValidation.msg,
  )
})

export default function LoginForm() {
 
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  // const isLoading = useAppSelector(state => state.auth.loading);

  const dispatch = useAppDispatch();
  const submitHandler = async (values: FormValues) => {
    const { email, password } = values;
    const loginResult = await dispatch(
      loginThunk({
        email,
        password,
      })
    );

    if (loginThunk.rejected.match(loginResult)) {
      toast.error('Incorrect email or passowrd');
    }
    if (loginThunk.fulfilled.match(loginResult)) {
      toast.success('Login Success');
    }
  };
  return (
    <>
    <FormParent>
      <FormLogin onSubmit={handleSubmit(submitHandler)}>
      <h2>SIGN IN</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 }, width:"100%",
      }}
      noValidate
      autoComplete="off"
    >
     
      <Input placeholder="Email Address" inputProps={ariaLabel} sx={{width:"100%"}}  {...register('email')}
          error={errors?.email?.message ? true : false}
          helperText={errors?.email?.message} />
    </Box>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },  width:"100%",
      }}
      noValidate
      autoComplete="off"
    >
     
      <Input placeholder="Password" inputProps={ariaLabel} sx={{width:"100%"}}   {...register('password')}
          error={errors?.password?.message ? true : false}
          helperText={errors?.password?.message}/>
  
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