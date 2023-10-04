import React from 'react'
import Image from 'next/image';


const pawstore = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447031/Can%20on/PawsStore_zupmlb.png';
const appstore = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447029/Can%20on/Disponible-appstore-ENG_lhvwlb.png';
const googleplay = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447029/Can%20on/Disponible-google-play-ENG_vhjksp.png';

export default function DownloadTabs() {

    const stores = [
        {
            'name': 'pawstore',
            'img': pawstore,
            'link': '#'
        },
        {
            'name': 'appstore',
            'img': appstore,
            'link': '#'
        },
        {
            'name': 'googleplay',
            'img': googleplay,
            'link': '#'
        }
    ]




    return (
        <ul className='relative z-10 flex flex-row w-full h-full  justify-center items-center gap-4 sm:justify-start sm:items-start '>
            {stores.map((store) => (
                <li key={store.name}>
                    <a href={store.link}>
                        <img className='h-auto w-26' src={store.img} alt={store.name} />
                    </a>
                </li>
            ))}
        </ul>


    )
}
