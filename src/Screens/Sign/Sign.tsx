// import Box from '@mui/material/Box';
// import { Checkbox, FormControlLabel, TextField } from '@mui/material';
// import Button from '../../Components/Buttonn/Button';
// import { FormControl, FormSign, FormParent, LinkRegister } from './Style';
// import {useForm} from "react-hook-form"
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useAppDispatch } from '../../store';
// import { signupThunk } from '../../store/auth';
// import toast from 'react-hot-toast';


// const ariaLabel = { 'aria-label': 'description' };
// const passwordValidation = {
//   exp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//   msg: 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
// };
// interface FormValue{
//     firstName: string;
//     lastName: string;
//     email: string;
//     password : string
// }
// const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required(),
//     lastName: Yup.string().required(),
//     email: Yup.string().email().required(),
//     password: Yup.string().matches(
//         passwordValidation.exp,
//         passwordValidation.msg,

// ),
    
// })
// export default function SignForm() {
 
//     const { register, handleSubmit, formState: { errors }, } = useForm<FormValue>({
//                 resolver: yupResolver(validationSchema)

//     });
    
//  const dispatch = useAppDispatch();

//   const submitHandler = async (values: FormValue) => {
//     const { firstName, lastName, password, email } = values;
//     const result = await dispatch(
//       signupThunk({
//           firstName,
//           lastName,
//           email,
//           password,
//       })
       
//       );
//        console.log(result)
//     if (signupThunk.rejected.match(result)) {
//       if (result.payload?.msg) {
//         toast.error(result.payload.msg);
//       }
//     }
//     if (signupThunk.fulfilled.match(result)) {
//       toast.success('Signup success');
//     }
//   };


//   return (
//     <>
//     <FormParent>
//       <FormSign onSubmit = { handleSubmit (submitHandler)}>
//                   <h2>CREATE ACCOUNT</h2>
//       <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },  width:"100%",
//       }}>
     
//                       <TextField placeholder="First Name" inputProps={ariaLabel} sx={{ width: "100%" }} {...register('firstName')}
//                           error={errors?.firstName?.message ? true : false}  helperText={errors?.firstName?.message} />
  
//       </Box>
//       <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },  width:"100%",
//       }}

//       >
     
//                       <TextField placeholder="LastName" inputProps={ariaLabel} sx={{ width: "100%" }} {...register('lastName')}
//                       error={errors?.lastName?.message ? true : false} helperText={errors?.lastName?.message}
//                       />
  
//      </Box>
//      <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 }, width:"100%",
//       }}
    
//      >
     
//                       <TextField placeholder="Email Address" inputProps={ariaLabel} sx={{ width: "100%" }} {...register('email')}
//       error={errors?.email?.message ? true : false} helperText={errors?.email?.message}
//                       />
//      </Box>
//      <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },  width:"100%",
//       }}

//     >
     
//                       <TextField placeholder="Password" inputProps={ariaLabel} sx={{ width: "100%" }} {...register("password")}
//                       error={errors?.password?.message ? true : false} helperText={errors?.password?.message}
//                       />
  
//     </Box>
//          <FormControl control={<Checkbox defaultChecked />} label="Remember Me" />
                
//                   <Button name=" REGISTER NOW" />
         
//       <LinkRegister href="#" underline="always" sx={{marginTop:"40px" , color:"#D1094B" , textDecoration:"#D1094B block"}}>
//        {'I HAVE AN ACCOUNT'}
//         </LinkRegister>
//         </FormSign>
//       </FormParent >
    
//         </>
//   );
// }
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import React from 'react';
import Button from '../../Components/Buttonn/Button';

import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../store/index';
import { signupThunk } from '../../store/auth';
// import { passwordValidation } from '../utils/validation';
import toast from 'react-hot-toast';
import { FormControl, FormParent, FormSign, LinkRegister } from './Style';

interface FormValues {
    name: string;
    // lastName: string;
    email: string;
    password: string;
}
 const passwordValidation = {
  exp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
   msg: 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
};
const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
      // lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().matches(
    passwordValidation.exp,
    passwordValidation.msg
  ),
  
});

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useAppDispatch();

  const submitHandler = async (values: FormValues) => {
    const { name, password, email } = values;
      const result = await dispatch(
          signupThunk({
              name,
              // lastName,
              email,
              password,
          })
       
    );
 console.log(result);
    if (signupThunk.rejected.match(result)) {
      if (result.payload?.msg) {
        toast.error(result.payload.msg);
      }
    }
    if (signupThunk.fulfilled.match(result)) {
      toast.success('Signup success');
    }
  };

    return (
      <>
      <FormParent>
      <FormSign onSubmit={handleSubmit(submitHandler)}>
        <FormControl 
          error={errors.name?.message ? true : false}
          helperText={errors?.name?.message}
          label="Name"
          {...register('name')}
        />

            
        <FormControl 
          error={errors.email?.message ? true : false}
          helperText={errors?.email?.message}
          type="email"
          label="Email"
          {...register('email')}
        />
        <FormControl type="password"
          error={errors.password?.message ? true : false}
          helperText={errors?.password?.message}
          label="Password"
          {...register('password')}
              />
              
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                
                 <Button name=" REGISTER NOW" />
         
      <LinkRegister href="#" underline="always" sx={{marginTop:"40px" , color:"#D1094B" , textDecoration:"#D1094B block"}}>
       {'I HAVE AN ACCOUNT'}
        </LinkRegister>
             
              </FormSign>
                </FormParent>
                    </>
  );
};

export default SignupPage;