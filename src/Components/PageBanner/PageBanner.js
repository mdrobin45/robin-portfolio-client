import React from 'react';
import bannerBg from '../../images/pageBannerBg.jpg'

const PageBanner = ({title}) => {
    return (
        <div style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize:'cover'
        }} className='py-32'>
            <div className='container text-center'>
                <h2 className='text-6xl font-bold text-gray-800'>{title}</h2>
            </div>
        </div>
    );
};

export default PageBanner;