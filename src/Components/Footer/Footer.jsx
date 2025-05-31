import { FaLocationDot, FaPhoneVolume, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0c1524] text-white mt-[700px]">
      <div className="container">
        <a href='/' className='text-4xl pt-[30px]'>moutasem</a>
        <div className="pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            <div className="flex gap-[15px] w-[340px] max-w-full">
              <FaLocationDot className="w-[40px]" />
              <p className="font-normal text-sm tracking-[0.8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti velit provident impedit id, dolorum iusto atque 
                cupiditate delec
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-[15px] mb-[15px]">
                <FaPhoneVolume />
                <p className="">0945831172</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <MdOutlineMailOutline />
                <p className="">mee12@gmail.com</p>
              </div>
            </div>
            <div className="">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">meee</a>
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">sese</a>
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">lplp</a>
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">cxsd</a>
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">zatre</a>
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">njui</a>
                <a href="/" className="hover:text-primary transition-colors duration-300 text-base">loky</a>
              </ul>
            </div>
            <div className="flex gap-[15px] w-full justify-center md:w-auto">
              <div className="group w-[40px] h-[40px] element-center border-2 border-solid border-white rounded-full cursor-pointer">
                <FaFacebookF className="group-hover:text-primary" />
              </div>
              <div className="group w-[40px] h-[40px] element-center border-2 border-solid border-white rounded-full cursor-pointer">
                <FaTwitter className="group-hover:text-primary" />
              </div>
              <div className="group w-[40px] h-[40px] element-center border-2 border-solid border-white rounded-full cursor-pointer">
                <FaInstagram className="group-hover:text-primary" />
              </div>
            </div>
        </div> 
      </div>
    </footer>
  )
}

export default Footer