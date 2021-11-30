import React, { useEffect,useState } from 'react';
import PageBanner from '../../PageBanner/PageBanner';
import ProjectCard from '../../ProjectCard/ProjectCard';
import SectionHeader from '../../SectionHeader/SectionHeader';

const Projects = () =>
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
        <div className='container'>
            <PageBanner title='Projects' />
            <div data-aos='fade-up' data-aos-duration='1500' className='mt-16'>
                <SectionHeader
                    title='My Latest Projects'
                    subTitle='Here is my all latest web development projects. You can get idea about my experience with this projects.'
                    middle={true}
                />
                <div className='items-center justify-center md:flex md:text-left pt-10 text-center'>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>allTab(setTabId(1))}  style={tabId===1?{background:"#FEB000",color:'white'}:{background:''}} >ALL</button>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>tabClick('ecommerce',setTabId(2))} style={tabId===2?{background:"#FEB000",color:'white'}:{background:''}} >ECOMMERCE</button>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>tabClick('booking',setTabId(3))}  style={tabId===3?{background:"#FEB000",color:'white'}:{background:''}} >BOOKING</button>
                    <button className='border-2 border-primary md:my-0 mx-3 my-3 px-10 py-2 rounded-full shadow-xl text-gray-700' onClick={()=>tabClick('service',setTabId(4))}  style={tabId===4?{background:"#FEB000",color:'white'}:{background:''}} >SERVICE</button>
                </div> 
            </div>
            <div data-aos='fade-up' data-aos-duration='1500' className='md:grid py-10 grid-cols-3 gap-4'>
                {
                    projects.map(project => <ProjectCard key={project?.id} project={project}/>)
                }
            </div>
        </div>
    );
};

export default Projects;