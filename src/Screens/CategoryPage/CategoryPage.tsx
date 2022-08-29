// import * as React from 'react';
// import Box from '@mui/material/Box';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';
// import { baseUrl } from '../../api/config';
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import { map } from 'rxjs';
// import { useDispatch } from 'react-redux';
// import { useAppDispatch } from '../../store';
// import { productThunk } from '../../store/productsAuth';

// interface ICategoray {
//     id: string
//     title: string
// }
// interface DataItem {
//   id: string
// title:string
// }
// interface IProduct {
//     id: string;
//     title: string;
//     url: string
//   }
// export default function CheckboxesGroup() {

//   const [listCategory, setListCategory] = useState<DataItem[]>([]);
//   const [products, setProducts] = useState<IProduct[]>([]);


//   React.useEffect(() => {
    
//     const token = sessionStorage.getItem("user-token")
   
 
            
//     const getAllCheck = async () => {
//       const {data}  = await axios.get(`${baseUrl}/category`, { headers: { Authorization: String(token) } });
//       console.log(data);
      
//         const formated=data.map(({ id, title }: ICategoray) => {
//           return { id, title }
    
//   })
      
//        setListCategory( formated)
//     }
     
//            console.log('my Token: ', token)
//     getAllCheck()
//   },[])
//   const dispatch = useAppDispatch();
//   useEffect(() => {
    
//     const ppp = async () => {
//       console.log("before");
  
//       const {payload : {formated}} = await dispatch<any>(
//         productThunk()
//       //   const abed = result.map(({ id, title }: ICategoray)  => {
//       //     return { id, title }
     
//       // );
//       )
//       console.log("result products payload: ", formated)
//       setProducts(formated);
//     }
   
//     ppp();
//   }, [])
  
//   // conole.log(dispatch);


//   // const [state, setState] = React.useState({
//   //   gilad: true,
//   //   jason: false,
//   //   antoine: false,
//   // });

//   // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //   setState({
//   //     ...state,
//   //     [event.target.name]: event.target.checked,
//   //   });
//   // };

//   // const { gilad, jason, antoine } = state;
//   // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

//   // const { Panel } = FormGroup
//       const [Checked , setChecked] = useState([])

  
//   const handleToggle = (value) => {
//     const currentIndex = Checked.indexOf(value);
//     const newChecked = [...Checked];
//     if (currentIndex === -1) {
//       newChecked.push(value)
//     } else {
//       newChecked.splice(currentIndex ,1)
//     }
// setChecked(newChecked)
//   }
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <div  style={{backgroundColor:"red"}}>
//       {products.map(items => (
//         <div key={items.id}><h5>{items.title}</h5><h5>{items.url} </h5> <img src={ items.url}/></div>
//       ))}
//         </div>
//       <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
//         <FormLabel component="legend">CATEGORIES</FormLabel>
       
//         <FormGroup >
//            {/* <Panel header key="1"> */}
//              {listCategory.map(item => (
                
//                  <FormControlLabel  key={item.id}
//             control={
//               <Checkbox onChange={() => handleToggle(item.id)} />
//             }
//             label={item.title}
//           />
               
               
//       ))}
//          {/* </Panel>   */}
//         </FormGroup>
      
//       </FormControl>
  
//     </Box>
//   );
// }

import { Grid } from '@mui/material'
import React from 'react'
import CategoryProductCards from '../../Components/categoryProductCards/CategoryProductCards'
import CheckCategory from "../../Components/checkCategory/CheckCategory"
import Search from '../../Components/search/Search'
import { Container } from '../../Global.style'
export default function CategoryPage() {
  return (
    <>
    {/* <Container> */}
      <Grid container spacing={2} >
        <Grid item xs={2}>

          <CheckCategory />
        </Grid>
        <Grid item xs={10}>
           
          <Search />
          
           <CategoryProductCards />
          </Grid>
      </Grid>
        {/* <Container /> */}
        </>
  )
}
