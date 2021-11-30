import React from 'react';

const SectionHeader = ({title,subTitle,middle}) => {
    return (
        <div className={middle===true?'m-auto text-center sectionHeaderBg md:w-2/4':'sectionHeaderBg'}>
            <h2 className='font-bold py-6 text-5xl text-gray-800'>{title}</h2>
            <p className='text-lg text-gray-700'>{subTitle}</p>
        </div>
    );
};

export default SectionHeader;