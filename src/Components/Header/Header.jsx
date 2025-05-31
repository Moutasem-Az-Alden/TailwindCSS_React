import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "SignIn"])
  const headerRef = useRef()
  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            headerRef.current.style.background = "#0c1524";
            headerRef.current.style.padding = "20px 0";
        } else {
            headerRef.current.style.background = "transparent";
            headerRef.current.style.padding = "60px 0"; 
        }
    })
  },[])
  return (
    <header ref={headerRef} className='pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-300'>
      <div className='container mx-auto px-[60px] flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row'>
        <a href='/' className='text-white text-4xl'>moutasem</a> 
      <nav>
        <ul className='flex items-center gap-[50px]'>
            {
                links.map( (link) => (
                   <li key={link}>
                        <a href={`/${link.toLowerCase()}`} 
                           className='text-white opacity-85 hover:opacity-100 hover:underline transition-opacity duration-300'>    
                            {link}
                        </a>
                    </li>  
                ))
            }
        </ul>  
      </nav> 
      </div>
    </header>
  )
}

export default Header