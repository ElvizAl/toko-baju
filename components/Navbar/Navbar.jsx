import {useState} from 'react'

export default function Navbar() {
    const [navigation, setNavigation] = useState(false)
  return (
    <div>
    <nav className='fixed top-0 w-full z-50 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white'>
            <div className='flex items-center h-16 justify-between'>
                <div className='flex items-center'>
                            <button className='md:hidden' onClick={() => {setNavigation(!navigation)}}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                    
                    <div className='hidden md:flex'>
                    <h1 className='font-bold text-lg tracking-wide uppercase'>
                            <span className=' bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent'>KILL</span>ER
                    </h1>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='md:hidden'>
                        <h1 className='font-bold text-lg tracking-wide uppercase'>
                            <span className=' bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent'>KILL</span>ER
                        </h1>
                    </div>
                    <div className='hidden md:flex'>
                    <ul className='flex items-center font-semibold space-x-10'>
                        <li>home</li>
                        <li>product</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center space-x-3 md:space-x-6 justify-end'>
                        <button className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        </button>
                        <button className='hidden md:flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden fixed top-0 left-0 h-full w-full transition-all bg-gray-300/50 backdrop-blur ${navigation ? '' : '-left-full'}`}>
                <div className='flex justify-end pt-3 mr-2'>
                <button className='' onClick={() => {setNavigation(false)}}>
                    <svg className="w-6 h-6 items-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </div>
                 <div className='fixed top-0 h-full w-[50%] bg-black text-white'>
                    <div className='flex '>
                        <div className='flex flex-col text-[10-px] font-medium w-full border-b border-t text-white border-white divide-y divide-gray-300'>
                        <h1 className='px-7 py-3 text-[17px] text-red-500 '>Menu</h1> 
                        <a className='px-6 py-3 '>Home</a> 
                        <a className='px-6 py-3'>product</a> 
                        <a className='px-6 py-3'>About</a> 
                        <a className='px-6 py-3'>Contact</a> 
                        <a className='flex px-6 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           
                        </svg>
                        Account
                        </a>
                        </div>
                           
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
  )
}

