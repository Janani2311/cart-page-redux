import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import {useDispatch } from 'react-redux';
import {subTotal, deleteItem} from './../redux/cartSlice';
import Subtotal from './Subtotal';



function ProductCards({dataItem}) {
   
    let dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1);

    function increment() {
        if(quantity < 10)
        setQuantity(prevCount => prevCount += 1);      
    }

    function decrement() {
         
        if(quantity > 1)
        setQuantity(prevCount => prevCount -= 1);
    }

    function calculateSubtotal() {
        dispatch(subTotal([quantity,dataItem.id]))
    }
    

    useEffect(()=>{
        calculateSubtotal();
    } ,[quantity])

   
    function handleDelete(id){
       dispatch(deleteItem(id));
        
    }

  return <>
        
        <section>
            {/*<!--Html code to display cart products as list-->*/}
                <div className="row align-items-center d-flex">
                    <div className="col-md-7 row align-items-center d-flex product">
                        <div className="col-2"><img className="product-image" src={dataItem.images} alt={dataItem.title} /></div>
                        
                        <div className="col-7 description">
                            
                            <h3 className="product-title fw-bolder">{dataItem.title}</h3>
                            
                            <p>{dataItem.description}</p>
                        </div>    
                    </div>
                    <div className='col-md-5'>
                        
                        <div className='d-flex dropdown'>
                           
                            <div className='d-flex'>
                                <button onClick={()=>decrement(dataItem.id)}>-</button>&nbsp;
                                <div className='form-control text-center item-input'>{dataItem.quantity}</div>
                                <button onClick={()=>increment(dataItem.id)}>+</button>
                            </div>
                
                            <div>
                                <span>&#8377;</span><span>{dataItem.price}</span>
                            </div>
                        </div>  
                    </div>
                    {/* Remove button to remove item from shopping cart */}
                    <div className="col-11 remove">
                            <Button variant="link" 
                             onClick={()=>handleDelete(dataItem.id)}>Remove</Button>
                    </div>                        

                </div>
                <Subtotal subtotal={dataItem.subtotal}/>
            
            <hr/>
        </section>
  
  
  </>
}

export default ProductCards