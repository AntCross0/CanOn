import Image from 'next/image'
import doggy from './media/doggy.webp';
import DownloadTabs from './components/DownloadTabs';

export default function Home() {
  return (

    <div className="relative w-full">

      <div className='transition-all relative '>
        <div className='relative w-full max-w-6xl overflow-clip bg-primary text-white p-2 md:p-12'>
          <h2 className='transition-all z-10 h-fit px-2 font-black w-full sm:w-[26rem] line-clamp-2 py-2 leading-[4.2rem] text-5xl sm:text-6xl
          md:px-8  '>¿Guau can I help you?</h2>
          <p className='mt-4 font-bold w-full px-2 sm:w-[24rem] md:text-2xl md:w-[34rem] md:px-8 md:mt-8'>Get the app on the thing mom uses to point and
            laugh at me for no reason...</p>
          <div className='mt-4 px-2 md:px-8 md:mt-8'>

            <DownloadTabs />
          </div>
        </div>
        <svg className='' viewBox="0 412 1280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1280V638C1280 638 1081 269.5 842 562C603 854.5 0 694 0 694L0 0Z" fill="#8A5FE8" />
        </svg>
        <Image className='z-0 transition-all absolute h-auto right-[7%] w-[300px] -bottom-[100%] sm:right-[15%] sm:-bottom-3/4 md:right-4 md:-bottom-36 lg:right-14 lg:-bottom-4' priority={false} src={doggy} alt='doggy doggy' />
      </div>

    </div>
  )
}
