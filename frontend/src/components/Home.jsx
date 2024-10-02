import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="  mt-6 flex justify-center">
      <div className="text-center bg-gray-50 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold">MERN Authentication</h1>
        <p className="w-[60%] mx-auto mt-2">
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-Only cookie. It also uses Redux Toolkit and the Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link to="/sign-in">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-slate-300 hover:text-primary transition-all duration-300 sm:flex hidden">
              Sign in
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-slate-600 text-white hover:bg-slate-700 transition-all duration-300 sm:flex hidden">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
