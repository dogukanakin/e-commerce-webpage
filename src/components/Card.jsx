import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Card = () => {
  const dispatch = useDispatch()
  const { cardItems } = useSelector(state => state.card)

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

      {cardItems.map((item, card) => (
        <div className='h-28 flex justify-between items-center py-4 mt-5'>
          <img src={item.image} alt='' className='h-24' />
          <div className='w-44'>
            <div className='font-bold text-sm'>{item.title}</div>
            <div className='opacity-70 text-sm'>{item.category}</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {item.price} $
          </div>
          <div className='bg-red-500 w-20 p-2 cursor-pointer text-center text-white font-semibold'>
            Delete{' '}
          </div>
          {/* draw a line */}
        </div>
      ))}
    </div>
  )
}

export default Card
