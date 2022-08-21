import { FormControlLabel , Link, TextField } from "@mui/material";
import styled from "styled-components";
import { Flex } from "../../Global.style";




export const FormParent= styled(Flex)`
// background-color:green;
height:100vh;

`;


export const Input = styled(TextField)`

`
export const FormLogin = styled.form`
flex-direction:column;
display:flex;

// align-items:flex-start;
border-radius:5px;
border:solid 2px #000;
width:700px;
padding:20px 40px;
// background-color:red;

h2{
    text-align:left;
    width:100%;
    margin-bottom:30px;
}
Checkbox{
   background-color:red; 
}
Button{
    margin-top:100px;
    
}
.css-1ps4owl-MuiTypography-root-MuiLink-root {
   color: #D1094B;`;
export const FormControl = styled(FormControlLabel)`
       width:100%;
       .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #D1094B;
    text-decoration: red;
}

`
export const LinkRegister = styled(Link)`


`
