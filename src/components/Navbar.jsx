import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [show, setShow] = useState(false)
    console.log(show)
  return (
    <nav className="overflow-hidden flex fixed w-screen justify-between pl-0 md:pl-14 px-5 items-center bg-transparent pt-5 " >
        <div>
            <Link to={'/'} ><img src={logo} alt="" /></Link>
            <hr className=" hidden absolute top-[65px] left-40  z-40 border-slate-600 w-[30rem]" />
        </div>
        <div className="hidden md:flex barlow-condensed-extralight uppercase text-white bg-gray-900/10 backdrop-blur-2xl pl-24 pr-40  gap-10 h-fit py-8 items-center  *:flex *:gap-3 ">
            <Link to={"/"} > 
            <b className="barlow-condensed-regular">00</b> <p>Home</p>
            </Link>
            <Link to={"/Destination"} > 
            <b className="barlow-condensed-regular">01</b> <p>Destination</p>
            </Link>
            <Link to={"/crew"}> 
            <b className="barlow-condensed-regular">02</b> <p>Crew</p>
            </Link>
            <Link to={"/technology"}> 
            <b className="barlow-condensed-regular">03</b> <p>Technology</p>
            </Link>
        </div>
        { show === false ? (
            <TfiMenu onClick={()=> setShow(prev => !prev)} className="text-[#D0D6f9] text-2xl md:hidden"/>
        ) : (
            <IoMdClose onClick={()=> setShow(prev => !prev)} className="text-[#D0D6f9] text-4xl md:hidden"/>
        )
            
        }
        {show && <aside className="md:hidden pt-20 pl-10  text-base *:flex *:gap-3 gap-10  -z-30 w-[70%] bg-white/10 fixed flex flex-col top-0 right-0 h-screen barlow-condensed-extralight uppercase text-white  backdrop-blur-lg">
        <Link to={"/"} > 
            <b className="barlow-condensed-regular">00</b> <p>Home</p>
            </Link>
            <Link to={"/Destination"} > 
            <b className="barlow-condensed-regular">01</b> <p>Destination</p>
            </Link>
            <Link to={"/crew"}> 
            <b className="barlow-condensed-regular">02</b> <p>Crew</p>
            </Link>
            <Link to={"/technology"}> 
            <b className="barlow-condensed-regular">03</b> <p>Technology</p>
            </Link>
        </aside>
        }
        
    </nav>
  )
}

export default Navbar