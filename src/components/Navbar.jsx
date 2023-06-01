import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsLightbulb, BsBasketFill, BsMoon } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const [theme, setTheme] = useState('false')
  const dispatch = useDispatch()
  // add a dark mode and white mode with root

  useEffect(() => {
    const root = document.getElementById('root')
    if (theme) {
      root.style.backgroundColor = 'white'
      root.style.color = 'black'
    } else {
      root.style.backgroundColor = 'black'
      root.style.color = 'white'
    }
  }, [theme])

  return (
    <nav class='bg-white border-gray-100 dark:bg-gray-700 rounded '>
      <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a class='flex items-center'>
          <img
            src='https://i0.wp.com/loftus.homes/wp-content/uploads/2022/11/cropped-White-minimalist-Home-logo-1.png?w=500&ssl=1'
            class='w-20 h-20 mr-3 rounded-full'
            alt='Loftus Logo'
          />
          <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Loftus
          </span>
        </a>
        <div className='flex md:order-2'>
          <button
            type='button'
            data-collapse-toggle='navbar-search'
            aria-controls='navbar-search'
            aria-expanded='false'
            class='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
          >
            <svg
              class='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span class='sr-only'>Search</span>
          </button>
          <div class='relative hidden md:block'>
            <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                class='w-5 h-5 text-gray-500'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span class='sr-only'>Search icon</span>
            </div>
            <input
              id='navbar-search'
              type='text'
              class='block w-full py-5 pl-10 pr-3 text-sm placeholder-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700'
              placeholder='Search'
            />
          </div>
          <div
            class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-search'
          >
            <div class='px-10 '>
              <ul class='flex flex-col md:flex-row md:-mx-2 space-x-4'>
                <Link
                  to='/'
                  class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                  aria-current='page'
                >
                  Home
                </Link>
                <Link
                  to='/detail'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Detail
                </Link>
                <Link
                  to='/services'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Services
                </Link>
                <Link
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Contact
                </Link>
              </ul>
            </div>

            <div class='flex items-center space-x-4'>
              {/* add darh theme and light theme */}
              <div
                onClick={() => setTheme(!theme)}
                class='flex items-center justify-center w-10 h-10 text-gray-500 rounded-full bg-gray-100 dark:bg-gray-800'
              >
                {theme ? (
                  <BsLightbulb className='w-5 h-5 text-gray-100' />
                ) : (
                  <BsMoon className='w-5 h-5 text-gray-100' />
                )}
              </div>
              <div
                onClick={() =>
                  dispatch({ type: 'TOGGLE_DRAWER', payload: true })
                }
              >
                <BsBasketFill className='w-5 h-5 text-gray-100' />
              </div>
              <span class='flex items-center justify-center w-5 h-5text-sm font-medium text-white bg-blue-700 rounded-full'>
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
