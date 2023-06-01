import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productsActionDetail } from '../redux/actions/products'
import { useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const { product } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(productsActionDetail(id))
  }, [dispatch])

  const increment = stock => {
    if (count <= stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  console.log(product)
  return (
    <div>
      <div className='flex justify-center pt-6'>
        <img className='h-96 w-96 ' src={product?.image} alt='product' />
        <div className='flex flex-col justify-center'>
          <div className='flex flex-col justify-center pl-4'>
            <div>
              <h1 className='text-3xl font-semibold'>{product?.title}</h1>
            </div>
            <div className='pt-3'>
              <p className='text-2xl font-semibold text-transform capitalize'>
                Category: {product?.category}
              </p>
              <p className='text-1xl font-semibold'></p>
            </div>
            <div className='pt-3'>
              <p className='text-2xl font-semibold'>Description:</p>
              <p className='text-1xl font-semibold'>{product?.description}</p>
              <p className='text-1xl font-semibold'>
                {' '}
                Stock {product?.rating?.count}
              </p>
            </div>
            <div className='pt-3 flex'>
              <div className='flex space-x-2'>
                <p className='text-1xl font-semibold'>Rating:</p>
                <p className='text-1xl font-semibold'>
                  {product?.rating?.rate}
                </p>
                <FaStar className='text-yellow-500 h-5 w-4' />
              </div>
            </div>
            <div className='pt-3'>
              <p className='text-2xl font-semibold pb-3'>{product?.price}$</p>
              <div className='  flex pt-1 space-x-3 pl-3'>
                <CgMathPlus
                  onClick={() => increment(product?.rating?.count)}
                  className='cursor-pointer h-7 w-7 text-black border-blue-500 rounded-xl border'
                />
                <p className='text-1xl font-bold '>{count}</p>
                <CgMathMinus
                  onClick={() => decrement()}
                  className='cursor-pointer h-7 w-7 text-black border-blue-500 border rounded-xl'
                />
              </div>
              <div className='pt-3'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded w-full p-3 '>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
