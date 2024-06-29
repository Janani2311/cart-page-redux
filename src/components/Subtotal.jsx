import React from 'react'

function Subtotal({subtotal}) {
    
  return <>
        <div className="container">
            <div className="row mb-2 justify-content-between d-flex">
                <div className="col-10">SUBTOTAL</div>
                
                <div className="col-2"><span>&#8377;</span><strong>{subtotal}</strong></div>                                       
            </div>
            <div className="row mb-2 justify-content-between d-flex">
                <div className="col-10">SHIPPING</div>
                
                <div className="col-2">Free</div>                                       
            </div>
        </div> 
  
  </>
 
  
}

export default Subtotal