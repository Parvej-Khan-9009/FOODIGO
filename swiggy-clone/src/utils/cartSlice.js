import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: 'cartData',
    initialState: {
        items: JSON.parse(localStorage.getItem('localCartData')) ? JSON.parse(localStorage.getItem('localCartData')) : [],
        differentRestaurentData: {}
    },
    reducers: {
        // mutating the state
        addItem: (state, action)=>{                
            let result = state.items.findIndex((data)=> {
                return data.id === action.payload.id
            })
            if (result == -1){
                state.items.push(action.payload);
            } else {
                state.items[result].quantity += 1;
            }
        },
        increaseItem: (state, action)=>{
            if(action.payload.identity == "index"){
                state.items[action.payload.index].quantity++;
            } else {
                let result = state.items.findIndex((data) => data.id === action.payload.id)
                state.items[result].quantity++;
            }
        },
        decreaseItem: (state, action)=>{
            if(action.payload.identity == "index"){
                if(state.items[action.payload.index].quantity > 1){
                    state.items[action.payload.index].quantity--;
                } else {
                    state.items.splice(action.payload.index, 1);
                    toast(
                        "Item removed from cart",
                        {
                          position: "bottom-center",                          
                          duration: 3000,
                          style: {
                            background: '#333',
                            color: '#fff',
                          }
                        }
                    );
                }
            } else {
                let result = state.items.findIndex((data) => data.id === action.payload.id);

                if(state.items[result].quantity > 1){
                    state.items[result].quantity--;
                } else {
                    state.items.splice(result, 1);
                    toast(
                        "Item removed from cart",
                        {
                          position: "bottom-center",                          
                          duration: 3000,
                          style: {
                            background: '#333',
                            color: '#fff',
                          }
                        }
                    );
                }
            }
        },
        addDdifferentRestaurentData: (state, action)=>{
            state.differentRestaurentData = action.payload;
        },
        resetCart: (state, action)=>{
            state.items.length = 0;
            state.items.push(action.payload);
        },
    }
});

export default cartSlice.reducer;

export const { addItem, increaseItem, decreaseItem, addDdifferentRestaurentData, resetCart } = cartSlice.actions;