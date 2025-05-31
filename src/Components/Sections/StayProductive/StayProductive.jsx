import { FaArrowRight } from "react-icons/fa6";

const StayProductive = () => {
  return (
    <section className='mb-[200px]'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
                <div className="">
                    <img src="/src/assets/images/landing.jpg" alt="img" />
                </div>
                <div className="text-white">
                    <h3 className="font-medium text-[35px] leading-[50px]">
                        Stay productive
                        <br />
                        wherever you are
                    </h3>
                    <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
                        <p className="mb-[15px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio voluptate laboriosam consectetur
                        </p>
                         <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio voluptate laboriosam consectetur
                        </p>
                    </div>
                    <a 
                     href="/" 
                     className="text-primary pb-[5px] flex items-center gap-[30px] w-fit hover:text-[#42b0d1] transition-colors duration-300 border-b-2 border-primary border-solid">
                        See how Fylo works
                        <div className="p-[5px] w-fit rounded-full bg-primary text-black animate-moveRight"><FaArrowRight /></div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StayProductive