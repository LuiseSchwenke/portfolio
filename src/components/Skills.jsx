import React from 'react'
import html from "../asstets/html.png"
import css from "../asstets/css.png"
import javascript from "../asstets/javascript.png"
import react from "../asstets/react.png"
import tailwind from "../asstets/tailwind.png"
import sql from "../asstets/sql.png"
import postman from "../asstets/postman.png"
import api from "../asstets/api.png"
import git from "../asstets/git.png"

const Skills = () => {
    return (
      <div className='bg-black text-gray-500 border border-gray-500 md:h-auto max-w-[1200px] mx-auto flex flex-col items-center md:items-start md:flex-row'>
  

        <div className='flex flex-wrap items-center justify-center md:justify-start'>
          <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
            My <br />
            Tech<br />
            Stack
          </h2>
        </div>

        <div className='flex flex-wrap items-center justify-center md:justify-start md:w-full'>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={git} alt='Git symbol' width={100} height={100} />
            <p className='mt-2'>Git</p>
          </div>
  
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={sql} alt='SQL symbol' width={100} height={100} />
            <p className='mt-2'>SQL</p>
          </div>
  
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={postman} alt='Postman symbol' width={100} height={100} />
            <p className='mt-2'>Postman</p>
          </div>
  
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={api} alt='API symbol' width={100} height={100} />
            <p className='mt-2'>REST API</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt='React symbol' width={100} height={100} />
            <p className='mt-2'>React</p>
          </div>
  
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt='Tailwind symbol' width={100} height={100} />
            <p className='mt-2'>Tailwind</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt='HTML symbol' width={100} height={100} />
            <p className='mt-2'>HTML</p>
          </div>
  
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt='CSS symbol' width={100} height={100} />
            <p className='mt-2'>CSS</p>
          </div>
  
          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt='Javascript symbol' width={100} height={100} />
            <p className='mt-2'>JavaScript</p>
          </div>
  
        </div>
  
      </div>
    );
  }
  
export default Skills