import React from 'react'

const Footer = () => {
    return (
        <footer className='transition-all w-full h-fit max-w-[1248px] flex  flex-col-reverse gap-2 center justify-center mx-auto p-4 text-white
        md:flex-row items-center md:justify-between bg-red-400'>
            <div>
                <h6 className='text-sm font-bold'>Site created by <a href='https://anthony-gomez.vercel.app' target='_blank' className='underline'>Anthony Gomez</a></h6>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <a className='' target='_blank' href='https://github.com/antcross0'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white transition-all ease hover:scale-110 ">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z">
                        </path>
                    </svg>
                </a>
                <a className='' target='_blank' href='mailto:angpersonal@outlook.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 transition-all ease hover:scale-110
                    fill-white">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </a>
                <a className='' target='_blank' href='https://www.linkedin.com/in/anthony-gomez-s/'>
                    <svg width="80" height="80" viewBox="0 0 80 80" className='w-6 h-6 p-1 rounded bg-dark dark:bg-white hover:bg-blue dark:hover:bg-yellow transition-all ease hover:scale-110 ' xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z" className='fill-red-400' />
                        <path d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z" className='fill-red-400 ' />
                        <path d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z" fill="none" className='fill-red-400' />
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer
