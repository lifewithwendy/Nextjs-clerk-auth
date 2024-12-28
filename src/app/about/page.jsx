export default function About() {
  return (
    <div className='min-h-screen bg-black px-4 py-12'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-purple-600 inline-block w-full text-transparent bg-clip-text'>
          About
        </h1>
        
        <div className='bg-gray-900 p-8 rounded-lg border border-purple-800 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-6 text-gray-300'>
            <div className='border-l-4 border-purple-500 pl-4'>
              <p className='mb-4'>
                Next.js application with Clerk authentication and MongoDB integration.
              </p>
            </div>

            <div className='space-y-4'>
              <p>
                Built with modern web technologies for secure and scalable applications:
              </p>
              <ul className='space-y-2 list-disc list-inside text-gray-400'>
                <li>Next.js for the frontend framework</li>
                <li>Clerk for secure authentication</li>
                <li>MongoDB for database management</li>
                <li>Webhook integration for real-time updates</li>
              </ul>
            </div>

            <div className='pt-4 space-y-3'>
              <h3 className='text-xl font-semibold text-purple-400'>Resources</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='https://github.com/lifewithwendy/Nextjs-clerk-auth'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-purple-400 hover:text-purple-300 transition-colors'
                  >
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href='https://clerk.com/docs'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-purple-400 hover:text-purple-300 transition-colors'
                  >
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                      <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                    </svg>
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
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                      <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                    </svg>
                    MongoDB Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <div className='aspect-video w-full overflow-hidden rounded-lg border border-purple-800'>
              <img
                src='https://www.loginradius.com/blog/static/6d170d83a7074847494831a6df861d3c/d3746/cover-auth.jpg'
                alt='Authentication Illustration'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}