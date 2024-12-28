"use client"; // Ensure it's a Client Component

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser(); // Fetch user data in the client
  //collecting the user object from clerk
  const firstName = user.firstName || "N/A";
  const lastName = user.lastName || "N/A";
  const email = user.primaryEmailAddress?.emailAddress || "N/A";
  const username = user.username || "N/A";
  const userId = user.id;

  return (
    <div className='min-h-screen bg-black px-4 py-12'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-purple-600 inline-block w-full text-transparent bg-clip-text'>
          Next.js Authentication
        </h1>

        <div className='bg-gray-900 p-8 rounded-lg border border-purple-800'>
          <div className='aspect-video relative mb-8 overflow-hidden rounded-lg'>
            <img
              src='https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg'
              alt='Authentication Illustration'
              className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
            />
          </div>

          <div className='space-y-6 text-gray-300'>
            <div className='border-l-4 border-purple-500 pl-4'>
              <p className='text-lg'>
                {isSignedIn
                  ? `Welcome back, ${user.firstName || 'User'}!`
                  : 'Welcome to our secure authentication platform'}
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-black p-6 rounded-lg border border-purple-800'>
                <h3 className='text-xl font-semibold text-purple-400 mb-3'>Authentication</h3>
                <p>Secure user authentication powered by Clerk with multiple sign-in methods and robust security features.</p>
              </div>

              <div className='bg-black p-6 rounded-lg border border-purple-800'>
                <h3 className='text-xl font-semibold text-purple-400 mb-3'>MongoDB Integration</h3>
                <p>Seamless data persistence with MongoDB and Mongoose for reliable user data management.</p>
              </div>
            </div>

            <div className='mt-8 space-y-4'>
              <h3 className='text-xl font-semibold text-purple-400'>Resources</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='https://clerk.com/docs'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-purple-400 hover:text-purple-300 transition-colors'
                  >
                    Clerk Documentation
                  </a>
                </li>
                <li>
                  <a
                    href='https://mongodb.com/docs'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-purple-400 hover:text-purple-300 transition-colors'
                  >
                    MongoDB Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
