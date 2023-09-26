import React from 'react'

export default function ImageSection() {


    const images = [
        'https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/9862205/pexels-photo-9862205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]




    return (
        <div className='relative h-fit p-2'>
            <ul className='flex flex-col sm:flex-row gap-y-10 gap-x-8 justify-center items-center sm:justify-between sm:items-start px-12'>
                {
                    images.map((image, index) => (
                        <li key={index} className='transition-all border-2 border-red-400 rounded-[32px] w-full h-[26rem] overflow-hidden 
                        shadow-[0px_30px_0px_0px] shadow-red-300
                        first-of-type:skew-y-0 sm:first-of-type:-skew-y-6 first-of-type:mt-6 first-of-type:shadow-[-15px_15px_0px_10px] sm:first-of-type:shadow-[-25px_30px_0px_10px] first-of-type:shadow-red-300 sm:first-of-type:shadow-red-300
                        skew-y-0 sm:odd:skew-y-6 sm:odd:mt-6 odd:shadow-red-300 sm:odd:shadow-red-300 odd:shadow-[15px_15px_0px_10px] sm:odd:shadow-[25px_30px_0px_10px] '>
                            <img className='h-full w-full object-cover' src={image} alt='Perro' />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
