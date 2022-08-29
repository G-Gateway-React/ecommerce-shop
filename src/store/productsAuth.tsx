import {  createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { isTemplateMiddle } from "typescript";
import { baseUrl } from "../api/config";



export interface IProduct {
  data: {
    id: string;
     title: string;
    images: Record<string,
      { url: string }
    >
    price: string;
  }[];
}
// interface ProductReturn{
//       id: string;
//     url: string;
//     name: string;
// }
type Nullable<T> = T | null;

interface State {
  id: Nullable<string>;
  url: Nullable<string>;
//  name: Nullable<string>;
  title: Nullable<string>;
    price: Nullable<string>;

  loading: boolean;
}

const initialState: State = {
   loading: false,
  id: null,
  title: null,
  price: null,
  url: null,
  // name: null,
 
};
export const productThunk = createAsyncThunk<
  {
    formated: any
  }>('auth/products', async (_ , thunkApi) => {
        try {
          const accessToken = sessionStorage.getItem("user-token")
          console.log("access token:", accessToken)
            const {data} = await axios.get<IProduct>(`${baseUrl}/product?page=0&perPage=10&price[from]=0&price[to]=100&categories=["4e6844fe-f9b0-4d24-b53b-5e1d4f1625d9"]`, {
                headers: { Authorization: String(accessToken) },
            })
            console.log("createAsyncThunk ssaeda: " , data)
        //  const formated=data.map(({ id, url , name }: IProduct) => {
        //   return { id, url , name  }
    
        //  })
          const formated= data.data.map(item => {
              return {
                id: item.id,
                title: item.title,
                price: item.price,
                url: item.images[0].url
              }
          })
          //  const formated=data.map((item) => {
          //    return {
          //     id:item.id,
          //      title: item.title,
          //     //  url : item.images[0].url,
          //    }
    
        //  })
          
          console.log("formated: ", formated);
          return {
              formated,
            }
            // const formatedData = data.map(item => {
            //        id: item.id,
            //         url : item.url,
            //          name : item.name,
            // })
//    console.log("formatedData" , formatedData);
            // return {
            //     formatedData,
            //     }
        }
             catch (e: any) {
    console.log(e);
    if (e?.response?.data?.msg) {
      return thunkApi.rejectWithValue({
        msg: e.response.data.msg,
      });
    } else {
      return thunkApi.rejectWithValue({
        msg: 'Something went wrong',
      });
    }
  }
    
    })

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
         builder.addCase(productThunk.pending, (state, action) => {
           console.log('pending');
      state.loading = true;
         }); 
      builder.addCase(productThunk.fulfilled, (state, action) => {
          console.log('ful filled: ', action.payload.formated)
          const {id, title, url , price} = action.payload.formated;
       
          // const {loading}=action.payload.formated;
           state.loading = false;
           state.id = id;
           state.title = title;
        state.url = url; 
        state.price = price;
          // id = action.payload
          //   url = action.payload
          //   state.name = name;
          // state.loading = false;
            //  console.log("ana habla" , state.loading)

        }); 
           builder.addCase(productThunk.rejected, (state, action) => {
      state.loading = false;
         }); 
    }
    
})



export default productsSlice.reducer;