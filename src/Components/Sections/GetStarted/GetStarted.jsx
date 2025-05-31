import React from 'react'

const GetStarted = () => {
  return (
    <section className='mb-[200px]'>
        <div className="container relative">
            <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[0] w-[865px] text-center p-[30px] max-w-full min-h-[275px] rounded-[5px] element-center flex-col text-white">
                <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get early access today</h3>
                <p className="font-normal w-[620px] max-w-full mx-auto mb-[30px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dolorem cupiditate odio necessitatibus numquam dolorum
                     sequi blanditiis pariatur. Obcaecati placeat unde asperiores iusto voluptatem accusamus magni vitae doloribus.
                </p>
                <form className='w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]' action="">
                    <input className='w-full h-[50px] rounded-[30px] pl-[30px] outline-none font-medium border-none text-black bg-white md:flex-1' type="email" placeholder='email@momo.com' />
                    <button className="w-full cursor-pointer md:w-[200px] h-[50px] btn transition-all duration-300 rounded-[30px]" type='submit'>Get Started For Free</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default GetStarted