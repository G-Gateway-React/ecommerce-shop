import { FormControlLabel , Link, TextField } from "@mui/material";
import styled from "styled-components";
import { Flex } from "../../Global.style";




export const FormParent= styled(Flex)`
// background-color:green;
height:100vh;

`;
export const FormSign = styled.form`
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
export const FormControl = styled(TextField)`


}

`
export const LinkRegister = styled(Link)`


`
