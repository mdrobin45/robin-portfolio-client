import React from 'react';
import {GrFacebookOption} from 'react-icons/gr'
import {IoLogoGithub} from 'react-icons/io'
import { ImLinkedin2 } from 'react-icons/im'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='md:flex container py-16 justify-between'>
                <div className='w-2/4'>
                    <h2 className='text-5xl font-bold pb-6'>Robin.</h2>
                    <p>
                    I'm a MERN stack web developer. I like to develop website, and it's my passion. I've completed a professional training at programming hero for web development. I've created 10+ websites with MERN. Now I'm junior web developer.
                    </p>
                    <div className='flex mt-6'>
                        <a target='_blank' rel='noreferrer' style={{background:'rgba(255, 166, 0, 0.2)'}} className='p-2 hover:bg-primary mx-2 rounded-full' href="https://facebook.com/mdrobin45r"><GrFacebookOption className='text-primary' /></a>
                        <a target='_blank' rel='noreferrer' style={{background:'rgba(255, 166, 0, 0.2)'}} className='p-2 hover:bg-primary mx-2 rounded-full' href="https://github.com/mdrobin45"><IoLogoGithub className='text-primary' /></a>
                        <a target='_blank' rel='noreferrer' style={{background:'rgba(255, 166, 0, 0.2)'}} className='p-2 hover:bg-primary mx-2 rounded-full' href="https://linkedin.com/in/mdrobin45"><ImLinkedin2 className='text-primary'/></a>
                    </div>
                </div>
                <div>
                    <h2 className='text-gray-800 font-bold text-3xl'>Links</h2>
                    <hr  className='border-2 border-dashed border-primary'/>
                    <Link className='text-gray-500 mt-6 inline-block hover:text-primary ' to='/about'>About Me</Link><br />
                    <Link className='text-gray-500 hover:text-primary' to='/projects'>Projects</Link><br />
                    <Link className='text-gray-500 hover:text-primary' to='/contact'>Contact Me</Link>
                </div>
                <div>
                <h2 className='text-gray-800 font-bold text-3xl'>Contact Me</h2>
                    <hr className='border-2 w-3/4 border-dashed border-primary'/>
                    <div className='flex mt-6 items-center'>
                        <BsTelephone/>
                        <a className='text-gray-500 pl-2 hover:text-primary' href="tel:+8801761614500">+8801761614500</a>
                    </div>
                    <div className='flex items-center'>
                        <HiOutlineMail/>
                        <a className='text-gray-500 pl-2 hover:text-primary' href="mailto:mdrobin.rana45@gmail.com">mdrobin.rana45@gmail.com</a>
                    </div>
                    <div className='flex items-center'>
                        <GoLocation />
                        <p className='text-gray-500 pl-2 hover:text-primary'>Bowali-1703, kaliakair, Gazipur <br /> Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            {/* Copywrite */}
            <div className='py-4 bg-gray-100'>
                <p className='text-gray-700 block text-center'>Copyright © 2020 <a className='text-primary' href="https://linkedin.com/in/mdrobin45">Robin</a>. All rights reserved.</p>
            </div>
        </>
        
    );
};

export default Footer;