                         

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const addlist = createAsyncThunk(
//     'items/addlist',
//     async () => {
//         return fetch(`https://fakestoreapi.com/products`).then(y => y.json())
// }
// )


const initialState = {
  item: [], 
};

const Addtocarttool = createSlice({
  name: "items",
  initialState,
  reducers: {
    addToCart: (state, action) => {
       
      const array  = [...state.item]

      if (state.item.length <= 0 ){
        let ib = { item: action.payload, count: 1 }
        array.push(ib);

      } 
      else {
              let exist = state.item.findIndex((va) => {
              return va.item.id == action.payload.id;
          })
          
          if (exist >= 0 ){

              array[exist].count++;

             }
          else {
              let ib = { item: action.payload, count: 1 }
               array.push(ib);
          }

          }

          state.item = array;
    },
    increment : (state) => {
      state.value += 1 ;
    }
    


  },
});

console.log(Addtocarttool);

export const { addToCart, incrementQuantity,increment } = Addtocarttool.actions
export default Addtocarttool.reducer

// ====================== 



