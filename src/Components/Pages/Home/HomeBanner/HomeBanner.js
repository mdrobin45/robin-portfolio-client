import React from 'react';
import BannerRight from '../../../../images/bannerRightImage.jpg'
import '../../../CustomStyle/Style.css'

const HomeBanner = () => {
    return (
        <div className='homeBannerLeft'>
            <div className='flex container items-center'>
                <div className='w-2/4'>
                    <h1 className='text-5xl pb-4 font-bold'>Hi, I'm Full Stack Web <span className='text-primary'>Developer & React Expert</span></h1>
                    <p className='text-xl py-3'>I'm a professional web developer / MERN Stack developer</p>
                    <p className='text-lg text-gray-500'>I'm a MERN stack web developer. I like to develop website, and it's my passion. I've completed a professional training at programming hero for web development. I've created 10+ websites with MERN. Now I'm junior web developer.</p>
                    <a href='/Md_Robin_Rana-Resume.pdf' className='bg-primary inline-block mt-4 px-6 py-3 rounded-3xl text-white text-xl'>DOWNLOAD RESUME</a>
                </div>
                <div className='w-2/4'>
                    <img className='w-full' src={BannerRight} alt="Banner " />
                </div>
            </div>  
        </div>
        
    );
};

export default HomeBanner;