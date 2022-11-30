import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>

                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis aspernatur at harum cumque voluptatibus porro vero perferendis, molestias voluptatum, hic nostrum eos repellat alias ut. Labore eveniet esse magnam laudantium distinctio, tempore molestiae maxime accusantium natus quia sequi praesentium iusto asperiores iure repellat quos id quas inventore illum repellendus.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus, odio excepturi neque fugit repudiandae quis eaque vel soluta suscipit ad perspiciatis corporis est ea modi aliquam maxime aspernatur unde quia aliquid cumque necessitatibus? Aut in quod et ipsa magnam, beatae impedit animi nostrum, velit aliquid dolore sapiente odit deserunt?
                </p>
            </div>

        </div>
    )
}

export default About;