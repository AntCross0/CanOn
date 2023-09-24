import React from 'react'
import Image from 'next/image';


import pawstore from '../media/PawsStore.png';
import appstore from '../media/Disponible-appstore-ENG.png';
import googleplay from '../media/Disponible-google-play-ENG.png';

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
                        <Image className='h-auto w-26' src={store.img} alt={store.name} />
                    </a>
                </li>
            ))}
        </ul>


    )
}
