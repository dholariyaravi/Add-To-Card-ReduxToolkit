// import { createSlice } from "@reduxjs/toolkit"
// const initialState = {
//          items: [],  
// }

// export const Counterslice = createSlice({
//  nmae  : 'counter',
//  initialState,
//  reducers : {
//     addtocard : (state, action) => {
//         let d  = state.items;
//         d.pus(action.payload);
//         state.items = d; 
//     },
//     decrement : (state) => {
//         state.count = state.count -1;

//     }
//  }
 
// })

// export  const {addtocard , decrement} =  Counterslice.actions;
// export default Counterslice.reducer;

                                      // ====================================XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                           


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addlist = createAsyncThunk(
    'items/addlist',
    async () => {
        return fetch(`https://fakestoreapi.com/products`).then(y => y.json())
}
)


const initialState = {
  items: [], 
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


  },
});

console.log(Addtocarttool);

export const { addToCart, incrementQuantity } = Addtocarttool.actions
export default Addtocarttool.reducer

// ====================== 



