import React from 'react'
import onSurf from '../asstets/onSurf.png'
import codes from '../asstets/codes.png'
import calc from '../asstets/calc.png'
import pomodoro from '../asstets/pomodoro.png'



const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <h2 className='text-4xl font-bold bm-4 primary-color'>My Work</h2>
            <p className='text-gray-500'>Find my recent work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        <div className='transform transition-tranform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container
            rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={onSurf} alt='Sufschool Webpage'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>ON Escola de Surf Webpresentation</span>
                <div className='pt-8 text-center'>
                    <a href='https://www.onescoladesurf.com/' target='blank'>
                    <button className='tect-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-tranform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container
            rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={codes} alt='Hashin key generator'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>MD5, SHA1, SHA2/SHA256 Key Creater</span>
                <div className='pt-8 text-center'>
                    <a href='https://hashing10-c564b96c4f4e.herokuapp.com/hash' target='blank'>
                    <button className='tect-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                    <a href='https://github.com/LuiseSchwenke/hashing10' target='blank'>
                    <button className='tect-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-tranform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container
            rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={calc} alt='simple calculator'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Reaculator with React State Control</span>
                <div className='pt-8 text-center'>
                    <a href='https://luiseschwenke.github.io/calculator_react/' target='blank'>
                    <button className='tect-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                    <a href='https://github.com/LuiseSchwenke/calculator_react' target='blank'>
                    <button className='tect-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-tranform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container
            rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={pomodoro} alt='Pomodoro method chrome extension'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Pomodoro Timer Chrome Extenion</span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/LuiseSchwenke/PomodoroChromeExtension' target='blank'>
                    <button className='tect-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>

            
        </div>



    </div>
  )
}

export default Work