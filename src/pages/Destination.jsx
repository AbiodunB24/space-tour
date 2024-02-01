import { useState } from "react";
import bg from "../assets/destination/background-destination-desktop.jpg";
import data from "../assets/data.json";
import bgmobile from "../assets/destination/background-destination-mobile.jpg"

const Destination = () => {
  const [destination] = useState(data.destinations);
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);

  const current = destination[index];
  console.log(typeof current);

  const handleClick = (args) => {
    setIndex(args);
    setIsActive(args);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})`  }}
      className="h-screen bg-cover overflow-hidden "
    >
      <h2 className="text-white pt-32 lg:pl-36 lg:justify-start justify-center items-center flex flex-row lg:text-[28px] text-base barlow-condensed-regular">
        {" "}
        <b className="pr-8 text-slate-100/10 backdrop-blur-1x1">01 </b>{" "}
        <p className="text-1x1">PICK YOUR DESTINATION</p>{" "}
      </h2>
      <div className="flex flex-col h-full lg:items-start items-center lg:flex-row lg:justify-between lg:pl-48 lg:pr-80">
        <img src={current.images.webp} className="lg:w-auto pt-5 lg:h-96 h-[15rem]  lg:pt-24" alt="" />
        <div className="flex items-center flex-col ">
          <div className="flex flex-row pt-3 text-slate-400 lg:pt-10 gap-4 lg:pl-80 tracking-widest barlow-condensed-regular">
            <p
              className={`flex flex-row  cursor-pointer ${isActive === 0 ? 'border-b-2 border-white text-white' : ''}`}
              onClick={() => handleClick(0)}
            >
              MOON
            </p>
            <p
              className={`flex flex-row cursor-pointer ${isActive === 1 ? 'border-b-2 border-white text-white' : ''}`}
              onClick={() => handleClick(1)}
            >
              MARS
            </p>
            <p
              className={`flex flex-row cursor-pointer ${isActive === 2 ? 'border-b-2 border-white text-white' : ''}`}
              onClick={() => handleClick(2)}
            >
              EUROPA
            </p>
            <p
              className={`flex flex-row cursor-pointer ${isActive === 3 ? 'border-b-2 border-white text-white' : ''}`}
              onClick={() => handleClick(3)}
            >
              TITAN
            </p>
          </div>
          <div className="flex items-center flex-col lg:pl-[310px] lg:pt-8 pt-4">
            <h1 className="text-white bellefair-regular lg:text-8xl text-6xl uppercase">
              {current.name}
            </h1>
            <h2 className="text-slate-400 justify-center px-16 items-center text-center lg:text-sm text-sm mt-5 barlow-regular lg:leading-6">
              {current.description}
            </h2>
            <hr className="mt-5 border-slate-600" />
            <div className="flex lg:flex-row flex-col gap-2 text-white mt-5 justify-between">
              <div className="flex flex-col">
                <h1 className="barlow-condensed-regular leading-6 text-xs text-slate-400 tracking-widest">
                  AVG. DISTANCE
                </h1>
                <h1 className="bellefair-regular tracking-wide text-xl uppercase">
                  {current.distance}
                </h1>
              </div>
              <div>
                <h1 className="barlow-condensed-regular leading-6 text-xs text-slate-400 tracking-widest">
                  EST. TRAVEL TIME
                </h1>
                <h1 className="bellefair-regular tracking-wide text-xl uppercase">
                  {current.travel}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
