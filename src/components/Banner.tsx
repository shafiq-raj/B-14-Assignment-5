
import banner from "../assets/banner-stack.png"

const Banner = () => {
  return (
    
    <div className="mx-auto max-w-5xl my-2 flex justify-between items-center">
        <div>
      <h1 className="font-inter text-5xl font-bold leading-tight ">
        Build Your Ideal
        <br />
        <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h1>
      
        <p className="font-plus jakarta-sans text-slate-600">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
     
      
        <button className="font-inter my-4 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 px-5 py-2 text-white"><a href="#">Explore Technologies</a></button>
        <button className="font-inter my-4 rounded-lg text-black border border-slate-400 px-12 py-2 ml-3"><a href="#">Learn More</a></button>
       </div>
    
      <div>
        <img src={banner} alt="" className="w-[380px] h-[380px]" />
      </div>
    </div>
  );
};

export default Banner;
