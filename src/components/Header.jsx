import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-4 shadow-lg bg-transparent bg-gradient-to-b from-purple-900 to-purple-1000'>
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
        <div className=" hover:scale-110 transition-all duration-300">
          {/* logo */}
          <Link href="/" className="text-2xl font-bold group cursor-pointer">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300'>
              Auth
            </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-md group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300'>
              App

            </span>
          </Link>
        </div>

        <div className="">
          {/* header menu buttons */}
          <nav className='flex flex-row items-center justify-center gap-4'> 
            <Link href="/sign-in" className="bg-transparent text-white px-2 py-2 rounded-md hover:bg-gray-300 hover:text-black transition-all duration-300">
              Sign In
            </Link>
            <Link href="/about" className="bg-transparent text-white px-2 py-2 rounded-md hover:bg-gray-300 hover:text-black transition-all duration-300">
              About
            </Link>
            <Link href="/" className="bg-transparent text-white px-2 py-2 rounded-md hover:bg-gray-300 hover:text-black transition-all duration-300">
              Home
            </Link>
          </nav>
        </div>
      </div>
      
    </header>
  )
}

export default Header
