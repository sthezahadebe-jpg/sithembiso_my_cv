import React from 'react';
import InstallNodejs from '../assets/portfolio/InstallNodejs.png';
import NavBar from '../assets/portfolio/NavBar.jpeg';
import Html from '../assets/portfolio/Html.png';
import GitHub_Logo from '../assets/portfolio/GitHub_Logo.png';
import Trello from '../assets/portfolio/Trello.webp';
import Discord from '../assets/portfolio/Discord.jpeg';
import Slack from '../assets/portfolio/Slack.webp';
import Css2 from '../assets/portfolio/Css2.png';
import JavaScript from '../assets/portfolio/JavaScript.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: GitHub_Logo
        }, 
        {
            id: 2,
            src: InstallNodejs
        },
        {
            id: 3,
            src: NavBar
        },
        {
            id: 4,
            src: Html
        },
        {
            id: 5,
            src: JavaScript
        },
        {
            id: 6,
            src: Css2
        },
        {
            id: 7,
            src: Trello
        },
        {
            id: 8,
            src: Discord
        },
        {
            id: 9,
            src: Slack
        },

    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Portfolio;