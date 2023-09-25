import Image from 'next/image'
import DownloadTabs from './components/DownloadTabs';

import doggy from './media/doggy.webp';
import bonetitle from './media/Bone-title.svg';
import ImageSection from './components/ImageSection';

export default function Home() {
  return (

    <div className="relative w-full flex flex-col gap-4">
      <div className='transition-all relative paws-clip h-[512px] md:h-[738px]'>
        <div className='relative w-full max-w-6xl overflow-clip  text-white p-2 md:p-12 '>
          <h2 className='transition-all z-10 h-fit px-2 font-black w-full sm:w-[26rem] line-clamp-2 py-2 leading-[4.2rem] text-5xl sm:text-6xl
          md:px-8  '>¿Guau can I help you?</h2>
          <p className='mt-4 font-bold w-full px-2 sm:w-[24rem] md:text-2xl md:w-[34rem] md:px-8 md:mt-8'>Get the app on the thing mom uses to point and
            laugh at me for no reason...</p>
          <div className='mt-4 px-2 md:px-8 md:mt-8'>
            <DownloadTabs />
          </div>
        </div>
        <Image className='z-0 transition-all absolute h-auto right-[7%] w-[300px] -bottom-[40%] sm:right-[5%] sm:-bottom-[40%] md:right-[3%] md:-bottom-16 lg:right-14 lg:-bottom-4' priority={false} src={doggy} alt='doggy doggy' />
      </div>
      <div className='relative w-full mt-56 md:mt-28'>
        <Image className=' w-[48rem] h-auto mx-auto' priority={false} src={bonetitle} alt='Bone title' />
      </div>

      <div>

        <ImageSection />
      </div>

      <div className='text-black mt-12'>
        otro contenido
      </div>
    </div>
  )
}
