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
                        Hello, I'm Luise, a 26-year-old software developer from Berlin, Germany, now based in São Paulo, Brazil. <br/>
                        I currently work as a Junior Developer at Omni Calculator, where I develop scientific calculators and lead the German content team.<br/>
                        A major project was creating seven financial calculators, boosting user engagement in Germany by 7% monthly. I also build web applications, 
                        handling tasks like secure payment gateways, APIs integration, and dynamic content management.<br/>
                        To enhance my skills, I'm pursuing a B.Sc. in Software Engineering at IU International University of Applied Sciences.<br/>
                        My technical expertise includes JavaScript, React, Git, SQL, and various frameworks. A notable project was developing a 
                        web app for a surf school which streamlined the school's lesson scheduling. I am committed to writing secure, best-practice code and continuously learning 
                         through courses on Java, web development, and design patterns.<br/>
                         Outside work, I enjoy surfing in Brazil and spending time with my horse.</p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} alt='surfer on a wave'/>

        </div>
    </div>
  )
}

export default About