import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='bg-black/80 backdrop-blur-sm border-b-4 border-purple-900/50 sticky top-0 z-50'>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="hover:scale-105 transition-all duration-300">
          <Link href="/" className="text-2xl font-bold">
            <span className='bg-gradient-to-r from-purple-400 to-purple-600 inline-block text-transparent bg-clip-text'>
              Next
            </span>
            <span className='text-gray-300'>
              Auth
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className='flex items-center gap-6'> 
          <Link 
            href="/" 
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            About
          </Link>

          {/* Auth Buttons */}
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                baseTheme: 'dark',
                elements: {
                  avatarBox: "w-8 h-8 rounded-full border-2 border-purple-500 hover:border-purple-400 transition-colors"
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  )
}

export default Header
