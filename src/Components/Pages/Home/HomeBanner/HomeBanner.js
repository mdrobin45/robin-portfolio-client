import React, { useEffect } from 'react';
import BannerRight from '../../../../images/bannerRightImage.jpg'
import '../../../CustomStyle/Style.css'
import AOS from 'aos'
import 'aos/dist/aos'
import 'aos/dist/aos.css'
import {BsCloudDownload}from 'react-icons/bs'

const HomeBanner = () =>
{
    useEffect(() =>
    {
        AOS.init();
    },[])
    return (
        <div className='homeBannerLeft mt-16'>
            <div className='md:flex container items-center'>
                <div data-aos='fade-in' data-aos-duration='1500' className='md:w-2/4'>
                    <h1 className='font-bold md:text-5xl pb-4 text-3xl'>Hi, I'm Full Stack Web <span className='text-primary'>Developer & React Expert</span></h1>
                    <p className='text-xl py-3'>I'm a professional web developer / MERN Stack developer</p>
                    <p className='text-lg text-gray-500'>I'm a MERN stack web developer. I like to develop website, and it's my passion. I've completed a professional training at programming hero for web development. I've created 10+ websites with MERN. Now I'm junior web developer.</p>
                    <a className='bg-primary inline-block mt-4 px-6 py-3 rounded-3xl text-white text-lg' href='/Md_Robin_Rana-Resume.pdf'>
                        <div className='flex items-center'>
                            <BsCloudDownload />
                            <p className='pl-2'>Download Resume</p>
                        </div>
                    </a>
                </div>
                <div data-aos='fade-in' data-aos-duration='1500' className='md:w-2/4'>
                    <img className='w-full' src={BannerRight} alt="Banner " />
                </div>
            </div>  
        </div>
        
    );
};

export default HomeBanner;