import React from 'react';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeContact from './HomeContact/HomeContact';
import ProjectTab from './ProjectTab/ProjectTab';

const Home = () =>
{
    return (
        <div>
            <HomeBanner />
            <HomeAbout/>
            <ProjectTab />
            <HomeContact/>
        </div>
    );
};

export default Home;