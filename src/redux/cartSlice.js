import {createSlice} from "@reduxjs/toolkit"
import { findIndexById } from "../utils/Helper"
import {totalPrice} from "../utils/Add"


const cartSlice = createSlice({
    initialState:{
        cart:[],
        total:1,
        quantity:1
    },
    name:"cart",
    reducers:{
        save:saveProducts,
        deleteItem:deleteItembyId,
        subTotal:productSubTotal
    }
})

export const {save, deleteItem, subTotal} = cartSlice.actions

export default cartSlice.reducer

function saveProducts(state,action){
    state.cart = action.payload
    state.total = totalPrice(state.cart);   
}

function deleteItembyId(state,action){
    let index = findIndexById(state.cart,action.payload)
    state.cart.splice(index,1);
    state.total = totalPrice(state.cart); 
}

function productSubTotal(state,action){
    let index = findIndexById(state.cart,action.payload[1])
    state.cart[index].quantity = action.payload[0]
    state.cart[index].subtotal = action.payload[0] * state.cart[index].price;
    state.total = totalPrice(state.cart); 
}

