import React from 'react';
import aboutBg from '../../../../images/aboutBG.jpg'
import SectionHeader from '../../../SectionHeader/SectionHeader';
import '../../../CustomStyle/Style.css'

const HomeAbout = () => {
    return (
        <div className='aboutLeft'>
            <div id='#aboutMe' className='pb-16'>
                <SectionHeader title='About Me' subTitle='Know more about me by reading my bio. You can also see my linkedin profile. If you have any question you can let me know with my contact form.' middle={true}/>
            </div>
            
            <div className='flex container items-center justify-between'>
                <div>
                    <img src={aboutBg} alt="About" />
                </div>
                <div>
                    <p className='text-gray-500 text-lg'>
                        My name is Robin. I'm a MERN stack web developer. I like to develop website, and it's my passion. I've completed a professional training at programming hero for web development. I've created 10+ websites with MERN. Now I'm junior web developer.
                    </p><br />
                    <p className='text-gray-500 text-lg'>
                        Always I try to learn new thing and grow my knowledge. I never lose my patience in any work. When I work I keep trying until the work is done. Always I try to find new technique, ideas for accomplish the task and grow quality.
                    </p><br />
                    <p className='text-gray-500 text-lg'>
                        Comfortable: HTML5, CSS3, JavaScript, ES6, React JS, React Router, SPA, React Hook, Bootstrap, Tailwind
                        Familiar: Node JS, Express JS, MongoDB, WordPress, NPM packages
                        Tools: Firebase, Heroku, GitHub, Chrome Dev Tools, VS Code, Sublime Text, WebStorm, Netlify, Photoshop, Figma
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;