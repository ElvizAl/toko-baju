import React from 'react'
import Image from 'next/image'
export default function ProductList() {
  return (
    <div className='mt-6 max-w-2xl md:max-w-7xl mx-auto py-5 px-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 '>
            <div className='aspect-[100%] h-72 md:h-80 col-span-2 overflow-hidden md:row-span-2'>
            <div className='relative h-full w-full'>
                    <Image 
                        src="/nana.jpg"
                        alt="brand"
                        height='500px'
                        width='500px'
                        layout='responsive'
                        objectFit='cover'
                    />
                    <div className='absolute items-center justify-center inset-0 mt-[180px] flex text-white'>
                        <button className='bg-transparent border border-black text-black hover:bg-gray-200 font-medium shadow-lg px-5 py-2 rounded'>View Product</button>
                    </div>
                </div>
            </div>
            <div className='aspect-[100%] h-72 col-span-2 md:col-span-1 overflow-hidden'>
                <div className='relative h-full w-full'>
                    <Image 
                        src="/nini.jpg"
                        alt="brand"
                        height='500px'
                        width='500px'
                        layout='responsive'
                        objectFit='cover'
                    />
                    <div className='absolute items-center justify-center mt-[180px] inset-0 flex text-white'>
                        <button className='bg-transparent border border-black text-black hover:bg-gray-200 font-medium shadow-lg px-5 py-2 rounded'>View Product</button>
                    </div>
                </div>
            </div>
            <div className=' aspect-[100%] h-72 col-span-2 md:col-span-1 overflow-hidden'>
            <div className='relative h-full w-full'>
                    <Image 
                        src="/nunu.jpg"
                        alt="brand"
                        height='500px'
                        width='500px'
                        layout='responsive'
                        objectFit='cover'
                    />
                    <div className='absolute items-center justify-center mt-[180px] inset-0 flex text-white'>
                        <button className='bg-transparent border border-black text-black hover:bg-gray-200 font-medium shadow-lg px-5 py-2 rounded'>View Product</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center mt-8 mb-4 justify-center'>
            <button className='px-8 font-[400] bg- text-white py-1'>SHOP ALL COLLECTION</button>
        </div>
    </div>
  )
}
