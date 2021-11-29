import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../CustomStyle/Style.css'

const ProjectTab = () =>
{
    const [projects, setProjects] = useState([]);
    const [tabId, setTabId] = useState(1);

    useEffect(() =>
    {
        fetch('/MyProjects.JSON')
            .then(res => res.json())
            .then(data =>
            {
                setProjects(data)
            });
    }, [])
    
    // Handle single tab click
    const tabClick = (tabName) =>
    {
        fetch('/MyProjects.JSON')
            .then(res => res.json())
            .then(data =>
            {
                setProjects(data.filter(project => project?.category === tabName))
            });
    }
    // Handle all tab click
    const allTab = () =>
    {
        fetch('/MyProjects.JSON')
            .then(res => res.json())
            .then(data =>setProjects(data));
    }

    return (
        <div className='container py-10'>
            <div className='projectBg'>
                <div className='m-auto text-center myProjectHeader md:w-2/4'>
                    <h2 className='font-bold py-6 text-5xl text-gray-800'>My Latest Project</h2>
                    <p className='text-lg text-gray-700'>Here is my all latest web development projects. You can get idea about my experience with this projects.</p>
                </div>
                <div className='items-center justify-center md:flex md:text-left pt-10 text-center'>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>allTab(setTabId(1))}  style={tabId===1?{background:"#FEB000",color:'white'}:{background:''}} >ALL</button>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>tabClick('ecommerce',setTabId(2))} style={tabId===2?{background:"#FEB000",color:'white'}:{background:''}} >ECOMMERCE</button>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>tabClick('booking',setTabId(3))}  style={tabId===3?{background:"#FEB000",color:'white'}:{background:''}} >BOOKING</button>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>tabClick('service',setTabId(4))}  style={tabId===4?{background:"#FEB000",color:'white'}:{background:''}} >SERVICE</button>
                </div> 
            </div>
            <div className='md:grid py-10 grid-cols-3 gap-4'>
                {
                    projects.map(project => <div
                        className='border-2 md:my-0 my-3 p-3 rounded shadow'
                        key={project?.id}>
                        <div className=''>
                           <img className='m-auto' src={project?.image} alt="Portfolio" />
                            <h2 className='text-3xl pt-3 font-bold'>{project?.name}</h2>
                            <p className='text-lg text-gray-500'>{project?.shortDes}</p>
                            <div className='md:flex justify-between'>
                                <a className='px-10 text-center w-full border-2 border-primary bg-primary py-2 shadow-xl md:mx-3 rounded-full text-white text-lg inline-block mt-6' rel="noopener noreferrer" href={project?.live} target='_blank'>Visit Site</a>
                                <Link className='px-10 border-2 w-full border-primary text-center bg-primary py-2 shadow-xl md:mx-3 rounded-full text-white text-lg inline-block mt-6' rel="noopener noreferrer" to={`/projects/${project?.id}`}>Details</Link>
                            </div>
                        </div>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProjectTab;