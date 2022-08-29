import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { baseUrl } from '../../api/config';
import axios from 'axios';
import { useEffect, useState } from "react";
import { map } from 'rxjs';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../store';
import { productThunk } from '../../store/productsAuth';

interface ICategoray {
    id: string
    title: string
}
interface DataItem {
  id: string 
title:string
}
// interface IProduct {
//     id: string;
//     title: string;
//     url: string
//   }
export default function CheckboxesGroup() {

  const [listCategory, setListCategory] = useState<DataItem[]>([]);
  // const [products, setProducts] = useState<IProduct[]>([]);


  React.useEffect(() => {
    
    const token = sessionStorage.getItem("user-token")
   
 
            
    const getAllCheck = async () => {
      const {data}  = await axios.get(`${baseUrl}/category`, { headers: { Authorization: String(token) } });
      console.log(data);
      
        const formated=data.map(({ id, title }: ICategoray) => {
          return { id, title }
    
  })
      
       setListCategory( formated)
    }
     
           console.log('my Token: ', token)
    getAllCheck()
  },[])
  // const dispatch = useAppDispatch();
  // useEffect(() => {
    
  //   const ppp = async () => {
  //     console.log("before");
  
  //     const {payload : {formated}} = await dispatch<any>(
  //       productThunk()
      
  //     )
  //     console.log("result products payload: ", formated)
  //     setProducts(formated);
  //   }
   
  //   ppp();
  // }, [])
  
  // conole.log(dispatch);


  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  // const { Panel } = FormGroup
// const [checked, setChecked] = useState([]);

  
//  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
//   var updatedList = [...checked];
//   if (event.target.checked) {
//     updatedList = [...checked, event.target.value];
//   } else {
//     updatedList.splice(checked.indexOf(event.target.value), 1);
//   }
//   setChecked(updatedList);
// };
  const handleCheck = (event) => {
  let updatedList = [...listCategory];
  if (event.target.checked) {
    updatedList = [...listCategory, event.target.value];
  } else {
    updatedList.splice(listCategory.indexOf(event.target.value), 1);
    }

    console.log(updatedList);
    setListCategory(updatedList);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
    



      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">CATEGORIES</FormLabel>
       
        <FormGroup >
           {/* <Panel header key="1"> */}
             {listCategory.map(item => (
                
                 <FormControlLabel  key={item.id}
                 control={
                   <Checkbox 
                    name={item.title}
                      key={item.id}
      onChange={handleCheck}/>
            }
            label={item.title}
          />
               
               
      ))}
         {/* </Panel>   */}
        </FormGroup>
      
      </FormControl>
        {/* <div  style={{backgroundColor:"red"}}>
      {products.map(items => (
        <div key={items.id}><h5>{items.title}</h5><h5>{items.url} </h5> <img src={ items.url}/></div>
      ))}
      </div> */}
  
    </Box>
  );
}


