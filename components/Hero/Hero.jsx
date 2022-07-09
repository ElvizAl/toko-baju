import {useState} from 'react'
import Image from 'next/image'

export default function Hero() {
    const [showBanner, setShowBanner] = useState(true)
  return (
    <div className='relative h-[550px] w-full bg-red-500/20 sm:h-[75vh] md:h-[540px]'>
        <Image 
        src="/celek.jpg"
        alt="brand"
        layout='fill'
        objectFit='cover'
        />
        <div className='absolute inset-0 bg-neutral-900/60'>
            <div className="mx-auto max-w-screen-lg">
              <div className="mt-20 m-6 min-h-[60px]">
                  <div className='relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-center text-white shadow-lg md:rounded-full'>
                    <p>
                    Selamat datang di <span className="font-bold">KILLER</span>. Dapatkan diskon sampai 99% dan gratis ongkir.
                    </p>
                    <div className='absolute top-0 -right-[2px] overflow-hidden md:top-[12px] md:right-2'>
                      <button className='bg-gray-400 rounded-full'>
                      <svg className="w-6 h-6 items-center text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            <div className='max-w-screen-lg mx-auto flex flex-col text-white items-center justify-center mt-20'>
            <h1 className="mb-4 font-bold text-3xl items-center ">New arivalls at here</h1>
                <p className=" md:text-lg px-5 items-center text-lg">The new arrivals have, well, newly arrived. Check out the latest option from our summer small-batch release while they’re still in stock.</p>
                <button className="bg-gray-200 px-8 py-2 mt-4 text-black text-base rounded-md shadow-sm shadow-black font-[500]">Shop new arrivals</button>
            </div>
        </div>
    </div>
  )
}