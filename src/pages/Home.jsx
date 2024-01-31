import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
    style={{ backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
      className="overflow-hidden h-screen pt-24 px-36 text-white flex flex-col justify-center "
    >
      <div className="flex justify-between items-center ">
      <div className="text-[#D0D6F9] w-[29.5%]">
        <h2 className=" barlow-condensed-regular text-2xl mb-4 tracking-widest ">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="text-8xl text-white bellefair-regular">SPACE</h1>
        <p className="text-sm mt-10 barlow-regular leading-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to={'/destination'} ><div className="shadow-xl bellefair-regular bg-white mt-20 mr-20 text-2xl text-black flex items-center justify-center h-40 w-40 p-28 rounded-full">EXPLORE</div></Link>
      
      </div>
    </div>
  );
};

export default Home;
