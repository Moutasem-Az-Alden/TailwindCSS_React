import React from 'react'

const FeaturesBox = ({item}) => {
  return (
    <div className='text-white element-center flex-col text-center'>
        <img 
            src={`/src/assets/images/${item.icon}`} 
            alt="icon-png"
            className='' 
        />
        <h4 className="text-2xl font-semibold my-[15px]">{item.title}</h4>
        <p className="font-normal text-sm">{item.desc}</p>
    </div>
  )
}

export default FeaturesBox