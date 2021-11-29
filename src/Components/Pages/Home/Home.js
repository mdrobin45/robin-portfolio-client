import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeContact from './HomeContact/HomeContact';
import ProjectTab from './ProjectTab/ProjectTab';

const Home = () =>
{
    return (
        <div>
            <HomeBanner />
            <ProjectTab />
            <HomeContact/>
        </div>
    );
};

export default Home;