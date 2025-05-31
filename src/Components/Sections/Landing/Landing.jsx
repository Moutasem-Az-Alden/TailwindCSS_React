import React from 'react'

const Landing = () => {
  return (
    <section className='bg-[#1c2230] mb-[200px]'>
        <div className="container">
            <div className='element-center flex-col pt-[200px]'>
                <div className='w-[750px] max-w-full'>
                    <img src="/src/assets/images/landing.jpg" alt="landing-img" className='w-full h-fit' />
                </div>
                <div className='text-white text-center'>
                    <h1 className='text-[30px] md:text-[40px] font-semibold mb-[15px]'>
                        All your files in one secure location
                        <br />
                        accessible anywhere.
                    </h1>
                    <p className='font-normal text-lg md:w-[600px] max-w-full md:mx-auto mb-[15px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem est obcaecati necessitatibus! Molestiae
                    </p>
                </div>
                <a href="/" className='btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium'>Get Started</a>
            </div>
        </div>
    </section>
  )
}

export default Landing