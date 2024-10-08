import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from "../asstets/me.png"
import cv from "../asstets/cv2.pdf"


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70hv] mx-auto py-8 bg-black'>
        <div className='mx-auto my-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt='Profile'/>
        </div>
        <div className='col-span-2 px-5'>
            <h1 className='text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "Web Developer",
                    1000,
                    "Software Development Student",
                    1000,
                    "Webdesigner",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Luise Schwenke and I am a Software Development Sutdent and Junior Web Developer.
            </p>

            <div className='my-8'>
                <a href={cv} target='blank' className='px-6 py-3 w-full rounded-xl mr-4 
                bg-gradient-to-br from-blue-400 to-green-600 text-white'>Download CV
                </a>
                <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-500
                hover:bg-gradient-to-br from-blue-400 to-green-600 text-white hover:border-none'>Contact
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero