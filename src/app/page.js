import Image from 'next/image'

import DownloadTabs from './components/DownloadTabs';
import ImageSection from './components/ImageSection';
import { Slider } from './components/Slider';

const doggy = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447030/Can%20on/doggy_okcwqx.webp';
const bonetitle = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447029/Can%20on/Bone-title_jlnl9l.svg';
const iconDollar = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447030/Can%20on/Icon_Dollar_luqje7.svg';
const dogchasingmedal = 'https://res.cloudinary.com/diccwoblx/image/upload/v1696447030/Can%20on/dog-chasing-medal_nogb8c.svg'
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
        <img className='z-0 transition-all absolute h-auto right-[7%] w-[300px] -bottom-[40%] sm:right-[5%] sm:-bottom-[40%] md:right-[3%] md:-bottom-16 lg:right-14 lg:-bottom-4' priority={false} src={doggy} alt='doggy doggy' />
      </div>
      <div className='relative w-full mt-52 md:mt-10'>
        <img className=' w-[48rem] h-auto mx-auto' priority={false} src={bonetitle} alt='Bone title' />
      </div>
      <div className='flex flex-col gap-4'>
        <ImageSection />
        <h4 className='quote mt-4 sm:mt-20 px-2 mx-auto w-full text-2xl max-w-[900px] font-bold'>Get in touch with hundred of pet lovers who love share any moment. Are you one of those? Join the app and discover this whole new world.</h4>
      </div>
      <div className='transition-all relative chain-clip w-full overflow-hidden z-50'>
        <div className='mt-14 mb-4 pl-8 w-[80%] font-bold text-lg text-white 
        sm:text-2xl sm:my-12
        md:w-[70%] md:my-14 md:pl-8
        lg:w-[50%] lg:my-16 lg:pl-12
        '>
          <h4>¡Add filters, effects, music, stickers and more!</h4>
        </div>
        <div className='relative overflow-x-auto'>
          <Slider />
        </div>
        <div>
        </div>
      </div>
      <div className='relative grid grid-cols-1 sm:grid-cols-2 z-0 my-12'>
        <div className='w-full'>
          <div className='h-fit bg-primary min-w-[280px] w-1/2 min-h-[450px] mx-auto rounded-lg  shadow-[15px_15px_0px_10px] p-8 flex flex-col gap-8 items-center justify-center bg-grid'>
            <Image className='w-32 h-auto mx-auto' src={iconDollar} width={300} height={300} />
            <h4 className='font-bold text-white text-2xl text-center'>Get prizes for liked post media</h4>
            <button className=' p-2 rounded bg-red-400 text-white font-bold transition-all hover:bg-red-500'>Downloand</button>

          </div>
        </div>
        <div className='dog-chasing-medal'>
          <Image src={dogchasingmedal} className='h-full' width={900} height={900} />
        </div>
      </div>
    </div>
  )
}
