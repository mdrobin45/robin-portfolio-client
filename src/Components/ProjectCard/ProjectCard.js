import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) =>
{
    const { image, name, shortDes } = project;
    return (
        <div className='border-2 md:my-0 my-3 p-3 rounded shadow'>
            <div>
                <img className='m-auto rounded-lg' src={image} alt="Portfolio" />
                <h2 className='text-3xl pt-3 font-bold'>{name}</h2>
                <p className='text-lg text-gray-500'>{shortDes}</p>
                <div className='md:flex justify-between'>
                    <a className='px-4 text-center w-full border-2 border-primary bg-primary py-2 shadow-xl md:mx-3 rounded-full text-white text-lg inline-block mt-6' rel="noopener noreferrer" href={project?.live} target='_blank'>
                        <div className='flex items-center'>
                            <p className='pr-1'>Visit Site</p>
                            <MdOpenInNew />
                        </div>
                    </a>
                    <Link className='px-10 border-2 w-full border-primary text-center bg-primary py-2 shadow-xl md:mx-3 rounded-full text-white text-lg inline-block mt-6' rel="noopener noreferrer" to={`/projects/${project?.id}`}>Details</Link>
                </div>
            </div>
        </div>
        
    );
};

export default ProjectCard;