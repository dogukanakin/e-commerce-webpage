import React from 'react'
import { useDispatch } from 'react-redux'

const Card = () => {
  const dispatch = useDispatch()
  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-2xl font-semibold'>Cart</h1>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_DRAWER', payload: false })}
          className='text-2xl font-semibold'
        >
          X
        </button>
      </div>
      <div className='h-28 flex justify-between items-center p-4'>
        <img
          className='h-24'
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt='product'
        />
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl font-semibold'>Product Name</h1>
          <p className='text-1xl font-semibold'>Price</p>
        </div>
      </div>
    </div>
  )
}

export default Card
