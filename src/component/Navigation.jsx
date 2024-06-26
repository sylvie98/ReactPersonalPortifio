import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
        <header class="bg-white border border-primary shadow-lg shadow-[#edd0e8]">
           <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex-1 md:flex md:items-center md:gap-12">
                      <Link to={"/"}> <a className='block text-gray-500 transition hover:text-gray-500/75'>
                            <span>SYLVIE</span></a>
                     </Link>
                    </div>
                    <div class="md:flex md:items-center md:gap-12">
                        <nav class="hidden md:block">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                   <Link to={"/About"}> <a  className='text-gray-500 transition hover:text-gray-500/75'> ABOUT </a> </Link>
                                </li>
                               
                                <li>
                                   <Link to={"/Service"}> <a  className='text-gray-500 transition hover:text-gray-500/75'> SERVICE </a></Link>
                                </li>

                                <li>
                                  <Link to={"/Project"}> <a className='text-gray-500 transition hover:text-gray-500/75'> PROJECT </a></Link> 
                                </li>

                                <li>
                                   <Link to={"/Form"}> <a className='text-gray-500 transition hover:text-gray-500/75'> CONTACT </a></Link> 
                                </li>
                        </ul>
                        </nav>

                        <div  className='block md:hidden'>
                            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation