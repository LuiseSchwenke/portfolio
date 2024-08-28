import React from 'react'
import aboutImg from '../asstets/aboutImg.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold bm-4 primary-color'>About Me</h2>
                        <p className='text-base lg:text-lg'> 
                        Hello, I’m Luise, a 26-year-old software developer based in São Paulo, Brazil. <br/>
                        Currently, I work remotely as a Junior Developer at Omni Calculator, where I specialize in developing scientific 
                        calculators and leading the German content creation team. I also develop responsive web applications and study 
                        Software Development in the 3rd semester. My expertise includes JavaScript, React, Git, SQL, and modern web frameworks. 
                        I am committed to writing secure, best-practice code and continuously learning 
                         through courses on Java, web development, and design patterns.<br/>
                         Outside work, I enjoy surfing Brazil's best waves and spending time with my horse.</p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} alt='surfer on a wave'/>

        </div>
    </div>
  )
}

export default About