import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"

const Navbar = () => {
  return (
    <nav className="overflow-hidden flex fixed w-screen justify-between pl-14 items-center bg-transparent pt-5 " >
        <div>
            <Link to={'/'} ><img src={logo} alt="" /></Link>
            <hr className="absolute top-[65px] left-40  z-40 border-slate-600 w-[30rem]" />
        </div>
        <div className="barlow-condensed-extralight uppercase text-white bg-gray-900/10 backdrop-blur-2xl pl-24 pr-40 gap-10 h-fit py-8 items-center flex *:flex *:gap-3 ">
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
    </nav>
  )
}

export default Navbar