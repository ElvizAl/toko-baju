import React from 'react'
import Image from 'next/image'

export default function ProductFeature() {
    const Card = [
        {
            id: 6,
            image: '/6.jpg',
            nama: 'celana',
            harga: 'Rp.15000',
        },
        {
            id: 7,
            image: '/7.jpg',
            nama: 'sepatu',
            harga: 'Rp.15000',
        },
        {
            id: 8,
            image: '/8.jpg',
            nama: 'kaos',
            harga: 'Rp.15000',
        },{
            id: 9,
            image: '/9.jpg',
            nama: 'celana',
            harga: 'Rp.15000',
        },{
            id: 10,
            image: '/10.jpg',
            nama: 'sepatu',
            harga: 'Rp.15000',
        },
    ]
  return (
    <div className='max-w-2xl md:max-w-7xl mx-auto px-4 md:py-2 sm:px-6 lg:px-4'>
        <div className='flex justify-center items-center'>
            <div className='mt-8'>
            <h1 className='text-2xl font-semibold text-center'>Best Collection</h1>
            <p className='mt-4'>Best Collection of Killer</p>
            </div>
        </div>
        <div className='grid gap-10 grid-cols-2 gap-x-6 md:grid-cols-3 mt-8 mb-6'>
            {
                        Card.map(({id, image, nama, harga}) => (
                            <a key={id}>
                            <div  className='w-full flex aspect-w-7 aspect-h-7 md:aspect-w-1 md:aspect-h-1 bg-gray-200 rounded-lg overflow-hidden '>
                            <Image 
                            src={image}
                            alt="brand"
                            layout='fill'
                            objectFit='cover'
                            property='priority'
                            />
                            </div>
                            <div className='flex justify-between mt-4'>
                                <p className=''>{nama}</p>
                                <p className=''>{harga}</p>
                            </div>
                            <div className='flex justify-center mt-6'>
                <button className='bg-black text-white text-center px-10 py-1 rounded-md' >BELI COII</button>
                </div>
                </a>
                            
                        ))
                    }
                
        </div>
    </div>
  )
}