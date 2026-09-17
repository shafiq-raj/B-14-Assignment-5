
import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
                   
        <nav className="mx-auto max-w-5xl flex justify-between my-3 sticky top-0 z-50 bg-white">
        <img src={logo} alt="" className="h-[25px] w-[100px]"/>
      
      <ul className="flex items-center gap-4">
        <li className="text-red-400"><a href="#">Home</a></li>
        <li><a href="#">Technologies</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div>
          <button className="px-5 py-2 rounded-lg border-0 outline-none cursor-pointer">
                  sign In
          </button>
          <button className="px-4 py-1 rounded-4xl border-0 outline-none bg-red-400 cursor-pointer text-white">Sign Up</button>
      </div>
      
      </nav>
    );
};

export default Nav;