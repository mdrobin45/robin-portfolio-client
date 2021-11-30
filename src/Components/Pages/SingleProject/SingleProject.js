import React, { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { MdOpenInNew } from 'react-icons/md';
import { useParams } from 'react-router';
import PageBanner from '../../PageBanner/PageBanner';

const SingleProject = () =>
{
    const [projects, setProjects] = useState([]);
    const { id } = useParams();

    useEffect(() =>
    {
        fetch('/MyProjects.JSON')
            .then(res => res.json())
            .then(data =>
            {
                setProjects(data)
            });
    }, [])
    const project = projects.find(project => project?.id === parseInt(id));
    return (
        <div className='container'>
            <PageBanner
                title={project?.name}
            />
            <div>
                <div className='grid mt-10 grid-cols-4 gap-2'>
                    {
                        project?.gallery?.map(image => <div key={image}>
                            <img className='rounded border-2 border-primary' src={image} alt="Gallery" />
                        </div>)
                    }
                </div>
                <div className='flex mt-6'>
                    <a target='_blank' rel='noreferrer' className='flex items-center rounded-full text-white bg-primary shadow-xl py-3 px-6 mx-3' href={project?.githubClient}>
                        <BsGithub />
                        <p className='pl-2'>Github Client</p>
                    </a>
                    <a target='_blank' rel='noreferrer' className='flex items-center rounded-full text-white bg-primary shadow-xl py-3 px-6 mx-3' href={project?.githubServer}>
                        <BsGithub />
                        <p className='pl-2'>Github Server</p>
                    </a>
                    <a target='_blank' rel='noreferrer' className='flex items-center rounded-full text-white bg-primary shadow-xl py-3 px-6 mx-3' href={project?.live}>
                        <p className='pr-2'>Live Website</p>
                        <MdOpenInNew />
                    </a>
                </div>
                <h2 className='text-4xl font-bold mt-6'>{project?.name}</h2>
                <div className='mt-6'>
                    <h2 className='text-2xl font-bold'>Features:</h2>
                    {
                        project?.feature?.map(point => <div key={point}>
                            <ul className='pl-10'>
                                <li className='text-lg' style={{listStyle:'inside'}}>{point}</li>
                            </ul>
                        </div>)
                    }
                </div>
                <h2 className='text-2xl font-bold mt-6'>Technology:</h2>
                <div className='mt-4 flex'>
                    {
                        project?.technology?.map(tool => <div>
                            <h2 className='text-lg rounded-full text-white bg-primary shadow-xl py-3 px-6 mx-3'>{tool}</h2>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleProject;