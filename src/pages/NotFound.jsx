import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>404 Not Found</h1>
      <p className='py-2'>
        The page you are looking for does not exist. Please check the URL or go
        back to the{' '}
        <Link to='/' className='underline'>
          homepage
        </Link>
        .
      </p>
    </div>
  )
}

export default NotFound
