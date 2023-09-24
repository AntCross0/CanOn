import Image from 'next/image'
import React from 'react'
import logo from '../../../public/Logo.svg';
import Link from 'next/link';


export default function NavBar() {

    const links = [
        {
            'label': 'Download',
            'url': '#'
        },
        {
            'label': 'About',
            'url': '#'
        },
        {
            'label': 'Autor',
            'url': 'https://anthony-gomez.vercel.app/'
        }
    ];

    return (
        <nav className='w-full p-4 flex flex-row justify-between gap-2 bg-primary'>
            <Link href='/' prefetch>
                <Image className='' priority src={logo} width={120} height={120} alt='Can on Logo' />
            </Link>
            <ul className='flex flex-row gap-4 justify-center items-center'>
                {
                    links.map((link, index) => (
                        <li className='transition-color block bg-none hover:bg-red-400 p-2 rounded text-white' key={index}>
                            <a className='font-bold' target={link.label === 'Autor' ? '_blank' : null} rel={link.label === 'Autor' ? 'noreferrer' : null} href={link.url}>{link.label}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
