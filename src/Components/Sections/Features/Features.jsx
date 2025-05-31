import React, { useState } from 'react'
import {FeaturesBox} from '../../index'

const Features = () => {
  const [items, setItems] = useState([
    {
        id: 1,
        icon: "icon-1.png",
        title: "moutasem sese",
        desc: "you can cee the old meme you yhh side can be life",
    },
    {
        id: 2,
        icon: "icon-1.png",
        title: "moutasem www",
        desc: "you can cee the old meme you yhh side can be life",
    },
    {
        id: 3,
        icon: "icon-1.png",
        title: "moutasem xxx",
        desc: "you can cee the old meme you yhh side can be life",
    },
    {
        id: 4,
        icon: "icon-1.png",
        title: "moutasem awaw",
        desc: "you can cee the old meme you yhh side can be life",
    },
  ])
  return (
    <section className='mb-[200px]'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
                {items.map(item => (
                    <FeaturesBox key={item.id} item= {item} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features