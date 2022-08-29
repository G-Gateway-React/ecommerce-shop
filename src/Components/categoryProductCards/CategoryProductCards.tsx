import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../store';
import { productThunk } from '../../store/productsAuth';
import ProductCard from '../productCard/ProductCard'
import Search from '../search/Search';
import {CategoryProductCardsStyle} from './Style'


interface IProduct {
    id: string;
    title: string;
    url: string;
    price: string;
  }
export default function CategoryProductCards() {
      const [products, setProducts] = useState<IProduct[]>([]);
 const dispatch = useAppDispatch();
  useEffect(() => {
    
    const ppp = async () => {
      console.log("before");
  
      const {payload : {formated}} = await dispatch<any>(
        productThunk()
      
      )
      console.log("result products payload: ", formated)
      setProducts(formated);
    }
   
    ppp();
  }, [])
    return (
      <>
            <CategoryProductCardsStyle>
                        

                {products.map(items => (
                    <ProductCard image={items.url} name={items.title} price={items.price} />
                ))}
                  
            </CategoryProductCardsStyle>
           
      </>
  )
}
