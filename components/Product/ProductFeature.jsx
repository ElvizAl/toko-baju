import React from 'react'
import Image from 'next/image'

export default function ProductFeature() {
    const Card = [
        {
            id: 1,
            image: '/1.jpg',
            nama: 'celana',
            harga: 'Rp.15000',
        },
        {
            id: 2,
            image: '/2.jpg',
            nama: 'sepatu',
            harga: 'Rp.15000',
        },
        {
            id: 3,
            image: '/3.jpg',
            nama: 'kaos',
            harga: 'Rp.15000',
        },{
            id: 4,
            image: '/4.jpg',
            nama: 'celana',
            harga: 'Rp.15000',
        },{
            id: 5,
            image: '/5.jpg',
            nama: 'sepatu',
            harga: 'Rp.15000',
        },
    ]
  return (
    <div className='max-w-2xl md:max-w-7xl mx-auto py-10 px-4 md:py-18 sm:px-6 lg:px-4'>
        <div className='flex justify-center items-center'>
            <div className='mt-8'>
            <h1 className='text-2xl font-semibold text-center'>New Collection</h1>
            <p className='mt-4'>New Collection of Killer</p>
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

