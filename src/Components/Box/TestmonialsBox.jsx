import React from 'react'

const TestmonialsBox = ({test}) => {
  return (
    <div className='text-white bg-[#21293c] rounded-[6px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]'>
        <p className='font-normal text-sm tracking-[0.8px] mb-[30px]'>{test.desc}</p>
        <div className="flex gap-[15px]">
            <img src={`/src/assets/images/${test.img}`} alt="img" className='w-[50px] h-[50px] rounded-full object-contain' />
            <div className="">
                <strong className='block mb-[5px]'>{test.name}</strong>
                <p className='font-normal text-sm'>{test.position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestmonialsBox