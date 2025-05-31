import { useState } from 'react'
import {TestmonialsBox} from '../../index'

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
        id:1,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quibusdam minus deleniti reprehenderit ex eum neque doloremque. Maior",
        position:"Ford you & CEO",
        name: "Eman",
        img: "test-1.jpg"
    },
    {
        id:3,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quibusdam minus deleniti reprehenderit ex eum neque doloremque. Maior",
        position:"Ford Al Water",
        name: "Sese",
        img: "test-1.jpg"
    },
    {
        id:4,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quibusdam minus deleniti reprehenderit ex eum neque doloremque. Maior",
        position:"Ford my & CEO",
        name: "Bobo",
        img: "test-1.jpg"
    },
  ])
  return (
    <section className='mb-[300px]'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
                {testData.map(test => (
                    <TestmonialsBox key = {test.id} test = {test} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials