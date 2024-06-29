import React from 'react'
import CartItem from './components/CartItem'
import Total from './components/Total'
import Totalcard from './components/Totalcard'




function App() {
  
  return <>
    <div className="wrapper">

      <div className='item-wrapper'>
        <CartItem/>
        <div className='total-card'>
            <Totalcard/>
        </div>       
      </div>
        <div className='total-landscape'>
            <Total/>
        </div>
    
    </div>
  </>
}

export default App