import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './itemList'
import { clearCart } from '../../utils/cartSlice'

function Cart() {
    const dispatch=useDispatch()
    const cart=useSelector((store)=>store.cart.items)
    const handleCLick=()=>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <button className=' bg-black h-8 w-20  text-white m-3 rounded-lg hover:bg-slate-400 hover:text-black' 
        onClick={handleCLick }>Clear cart</button>
        {cart.length==0?(<h1 className='my-7'>Crat is empty add som items !!!</h1>):""}
        <div className='w-6/12 m-auto shadow-lg '>
            <ItemList items={cart}/>
        </div>
      
    </div>
  )
}

export default Cart
