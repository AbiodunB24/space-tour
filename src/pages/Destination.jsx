import { useState } from "react";
import bg from "../assets/destination/background-destination-desktop.jpg";
import data from "../assets/data.json";

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
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen bg-cover"
    >
      <h2 className="text-white pt-32 pl-36 flex flex-row text-[28px] barlow-condensed-regular">
        {" "}
        <b className="pr-8 text-slate-100/10 backdrop-blur-1x1">01 </b>{" "}
        <p className="text-1x1">PICK YOUR DESTINATION</p>{" "}
      </h2>
      <div className="flex flex-row justify-between pl-48 pr-80">
        <img src={current.images.webp} className="w-auto h-96 pt-24" alt="" />
        <div className="flex flex-col ">
          <div className="flex flex-row text-slate-400 pt-10 gap-4 pl-80 tracking-widest barlow-condensed-regular">
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
          <div className="flex flex-col pl-[310px] pt-8">
            <h1 className="text-white bellefair-regular text-8xl uppercase">
              {current.name}
            </h1>
            <h2 className="text-slate-400 text-sm mt-5 barlow-regular leading-6">
              {current.description}
            </h2>
            <hr className="mt-5 border-slate-600" />
            <div className="flex flex-row text-white mt-5 justify-between">
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
