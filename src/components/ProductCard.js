import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductCard = ({ prd }) => {
  return (
    <div className='w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center hover:border-blue-900'>
      <img
        onClick={() => (window.location = `detail/${prd.id}`)}
        className='h-36 object-cover px-px-4 py-4 '
        src={prd?.image}
        alt='product'
      />
      <h1 className='h-16 font-semibold text-center py-4'>
        {(prd?.title).substring(0, 60)}...{' '}
      </h1>
      <p className='text-xl font-semibold py-8 pb-4'>{prd.price}$ </p>
      <button className='bg-blue-500 text-white px-4 py-2  rounded-lg'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard

// className='w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center'>
