import logo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <footer>
    <div className="flex justify-between items-center gap-8">
      <div className="mx-auto max-w-5xl my-12">
        <img src={logo} alt="" className="h-[25px] w-[100px]" />

        <p className="text-Plus Jakarta Sans my-2 text-sm text-gray-500">
          Curated tools, technologies, and resources for developers building{" "}
          <br />
          modern software.
        </p>
        <div className="flex mx-auto items-center text-sm gap-6 text-Plus Jakarta Sans font-semibold">
          <p>GitHub</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl my-12">
        <p className="text-Plus Jakarta Sans font-bold my-3">Product</p>
        <p className="text-gray-400 text-sm my-2">Home</p>
        <p className="text-gray-400 text-sm my-2">Technologies</p>
        <p className="text-gray-400 text-sm">Project</p>
      </div>
      <div className="mx-auto max-w-5xl my-12">
        <p className="text-Plus Jakarta Sans font-bold my-3">Company</p>
        <p className="text-gray-400 text-sm my-2">About</p>
        <p className="text-gray-400 text-sm my-2">Contact</p>
        <p className="text-gray-400 text-sm">Cariers</p>
      </div>
      <div className="mx-auto max-w-5xl my-12">
        <p className="text-Plus Jakarta Sans font-bold my-3">Legal</p>
        <p className="text-gray-400 text-sm my-2">Privacy Policy</p>
        <p className="text-gray-400 text-sm my-2">Terms of Service</p>
        <p>  </p>
      </div>
      {/* <div className="flex justify-between items-center">
        <div>
          <p className="text-Plus Jakarta Sans text-gray-400 my-20">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-Plus Jakarta Sans text-gray-400 my-20">
            Privecy
          </p>
          <p className="text-Plus Jakarta Sans text-gray-400 my-20">
            Terms
          </p>
        </div>
      </div> */}
      

    </div>
  <div className="flex justify-between items-center mx-auto max-w-6xl">
         <div>
          <p className="text-Plus Jakarta Sans text-gray-400 ">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>
        <div className="flex justify-end items-center gap-6">
          <p className="text-Plus Jakarta Sans text-gray-400 my-10">
            Privecy
          </p>
          <p className="text-Plus Jakarta Sans text-gray-400 my-10">
            Terms
          </p>
        </div>
  </div>
  </footer>
  );
};
