import bg from "../assets/technology/background-technology-desktop.jpg";
import data from "../assets/data.json";
import { useState } from "react";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);

  console.log(technology);

  const current = technology[index];
  console.log(current);

  const handleClick = (args) => {
    setIndex(args);
    setIsActive(args);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen  bg-cover"
    >
      <h2 className="text-white pt-40 pl-40 flex flex-row text-[28px] barlow-condensed-regular">
        {" "}
        <b className="pr-8 text-slate-100/10 backdrop-blur-1x1">03 </b>{" "}
        <p className="text-1x1 barlow-condensed-regular tracking-widest">SPACE LAUNCH 101</p>{" "}
      </h2>
      <div className="flex flex-row justify-between pl-[150px] w-full pt-[100px] ">
        <div className="left flex gap-16   ">
          <div className=" text-white flex flex-col gap-6 pt-7 ">
            <p
              className={`number  cursor-pointer w-[70px] h-[70px] flex justify-center bellefair-regular tracking-wider text-2xl  p-[10px] text-center items-center rounded-full
            ${isActive === 0? 'text-black bg-white' : 'border bg-transparent'}`}
              
              onClick={() => handleClick(0)}
            >
              1
            </p>
            <p
              className={`number border cursor-pointer w-[70px] h-[70px] flex justify-center bellefair-regular tracking-wider text-2xl bg-transparent p-[10px] text-center items-center rounded-full 
              ${isActive === 1? 'text-black bg-white' : 'border bg-transparent'}`}
              onClick={() => handleClick(1)}
            >
              2
            </p>
            <p
              className={`number border cursor-pointer w-[70px] h-[70px] flex justify-center bellefair-regular tracking-wider text-2xl bg-transparent p-[10px] text-center items-center rounded-full 
              ${isActive === 2? 'text-black bg-white' : 'border bg-transparent'}`}
              onClick={() => handleClick(2)}
            >
              3
            </p>
          </div>
          <div className="text-white pt-[-500]  ">
            <h3 className="barlow-condensed-regular tracking-widest text-slate-300 text-lg mt-5 leading-8">
              THE TERMINOLOGY…
            </h3>
            <h1 className="bellefair-regular pt-1 text-6xl uppercase">
              {current.name}
            </h1>
            <h3 className="text-slate-300 text-m mt-5 barlow-regular leading-6 w-[400px]">
              {current.description}
            </h3>
          </div>
        </div>
        <div className="mt-[-70px] ml-[100px]">
          <img
            src={current.images.portrait}
            alt=""
            className="w-[500px] h-[470px] pt-[-200px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;