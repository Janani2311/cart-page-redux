import React,{ useEffect} from 'react'
import ProductCards from './ProductCards';
import products from './../Data.json'
import { useSelector,useDispatch } from 'react-redux';
import {save} from './../redux/cartSlice';


function CartItem() {

    
    let data = useSelector((state) => state.cart.cart)
    let dispatch = useDispatch()
   
    let saveData = () => {
        dispatch(save(products))
    }


    useEffect(()=>{
        saveData();
    } ,[])
  

    return <>
            <div className='row product-item'>
                <h1>Shopping Cart <span>&#40;{data.length}&#41;</span></h1>
                <hr></hr>
                {(data.length)?"":<h2>Your Cart is Empty</h2>} 
                {
                    data.map((e,i) =>{
                        return <ProductCards dataItem={e} key={i}/>
                    })
                }
            </div>
        
    </>
}

export default CartItem