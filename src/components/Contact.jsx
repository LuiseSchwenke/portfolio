import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200] mx-auto bg-black ms:py-20 p-5' id='contact'>
        <div className='text-center'>
            <h2 className='primary-color text-4xl font-bold leading-tight'>Contact Me</h2>
        </div>

        <div className='max-w-[800px] mx-auto'>

            <div className='mt-6 rounded-xl bg-[#161616]'>
                <div className='p-10'>
                    <form action='https://getform.io/f/azylzmvb' method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div>
                                <div className='mt-2.5 relative'>
                                    <input type='text' name='name' id='name' placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                    placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-green-500'
                                    />

                                </div>
                            </div>

                            <div>
                                <div className='mt-2.5 relative'>
                                    <input type='text' name='email' id='email' placeholder='Your E-Mail' className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                    placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-green-500'
                                    />

                                </div>
                            </div>

                            <div>
                                <div className='mt-2.5 relative'>
                                    <textarea type='text' name='message' id='message' placeholder='Your Message...' className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                    placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-green-500' rows="4">
                                        </textarea>
                                </div>
                            </div>

                            <div className='sm:col-pan-2'>
                                <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>

                               Send</button>

                            </div>


                        </div>

                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact