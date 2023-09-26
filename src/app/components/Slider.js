import React from "react";



export const Slider = () => {

    const slides = [
        {
            'name': 'Filters',
            'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
            <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
          </svg>
          ,
            'img': 'https://res.cloudinary.com/diccwoblx/image/upload/v1695752182/Can%20on/Doggy_1_zdwvg2.png',
        },
        {
            'name': 'Edits',
            'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          ,
            'img': 'https://res.cloudinary.com/diccwoblx/image/upload/v1695752182/Can%20on/Doggy_2_m4qzkr.png'
        },
        {
            'name': 'Sounds',
            'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
          </svg>
          ,
            'img': 'https://res.cloudinary.com/diccwoblx/image/upload/v1695752183/Can%20on/Doggy_3_buq3ms.png'
        },
        {
            'name': 'Stickers',
            'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
          </svg>
          ,
            'img': 'https://res.cloudinary.com/diccwoblx/image/upload/v1695752183/Can%20on/Doggy_4_bwnsby.png'
        }
    ]





    return (
        <div className="relative text-white ">
            
            <div className="my-12">
            
            <svg  width="1280" height="861" viewBox="0 0 1280 861" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full absolute inline-block h-fit">
                <path d="M0 38.4714C0 38.4714 233 -1.64106e-10 640 0C1047 1.64106e-10 1280 38.4714 1280 38.4714L1280 713.617L1076.5 861C1076.5 861 928.787 809.566 825.5 784.057C741.548 763.324 661.5 751.546 597 752.63C532.5 753.714 450.625 765.092 237 801.938C23.375 838.784 0 713.617 0 713.617L0 38.4714Z" fill="#1E1E1E"/>
            </svg>
            
            </div>
            
            {/* <div style={{ clipPath: 'polygon(0% 6%, 10% 4%, 15% 3%, 29% 2%,50% 0%, 100% 0%, 100% 85%, 90% 100%, 80% 85%, 28% 100%, 16% 100%, 11% 100%, 6% 100%, 1% 100%, 0% 71% )'}}
             className="w-full max-w-6xl h-[861px] bg-black p-12" >hola</div> */}
        </div>
    )
}