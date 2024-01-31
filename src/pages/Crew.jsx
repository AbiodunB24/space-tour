import bg from "../assets/crew/background-crew-desktop.jpg"
import data from "../assets/data.json"
import { useState } from "react"

const Crew = () => {
    const [crew] = useState(data.crew);
    const [index, setIndex] = useState(0)
    const [isActive, setIsActive] = useState(0)

    console.log(crew)

    const current = crew[index]
    console.log(current)

    const handleClick = (args) => {
        setIndex(args);
        setIsActive(args);
      };

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="crew h-screen flex gap-40 px-24  py-36">
      <div className="details flex flex-col gap-10">
          <div className="text-white  ">
               <p className="flex barlow-condensed-regular text-[28px] gap-4 ml-20 tracking-widest"><span className="text-white opacity-[20%] barlow-condensed-bold">02</span> MEET YOUR CREW</p>
          </div>
          <div>
            <p className="uppercase text-white ml-[80px] text-[32px] bellefair-regular opacity-[50%] mt-[60px]">{current.role}</p>
            <p className="uppercase text-white ml-[80px] mt-3 bellefair-regular text-[52px]">{current.name}</p>
            <p className=" text-[#D0D6F9] w-[400px] ml-[80px] mt-9 bellefair-regular text-[18px] leading-6">{current.bio}</p>
          </div>
          <div className="flex gap-5 absolute bottom-20 ml-[85px] mt-9">
            <div className={`  rounded-full  cursor-pointer ${isActive === 0 ? 'bg-white w-[15px] h-[15px]' : 'bg-[#979797] opacity-[17%] w-[10px] h-[10px] '}`} onClick={() => handleClick(0)}></div>
            <div className={` rounded-full  cursor-pointer ${isActive === 1 ? 'bg-white w-[15px] h-[15px]' : 'bg-[#979797] opacity-[17%] w-[10px] h-[10px] '}`} onClick={() => handleClick(1)}></div>
            <div className={`  rounded-full   cursor-pointer ${isActive === 2 ? 'bg-white w-[15px] h-[15px]' : 'bg-[#979797] opacity-[17%] w-[10px] h-[10px] '}`} onClick={() => handleClick(2)}></div>
            <div className={`  rounded-full cursor-pointer ${isActive === 3 ? 'bg-white w-[15px] h-[15px]' : 'bg-[#979797] opacity-[17%] w-[10px] h-[10px] '}`} onClick={() => handleClick(3)}></div>
          </div>
      </div>
      
      <div className=" w-[410px] h-[500px] ml-[20px]  mt-[6px] ">
        <img src={current.images.webp} alt="" className="object-cover" />
      </div>
      
    </div>
  )
}

export default Crew