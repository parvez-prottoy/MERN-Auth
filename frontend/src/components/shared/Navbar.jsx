import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <header className="bg-gray-50">
      <nav className="container mx-auto flex items-center justify-between w-full relative boxShadow rounded-full py-[8px]">
        <Link to="/">
          <span className="text-xl font-bold">MERN.AUTH</span>
        </Link>
        <div className="items-center gap-[10px] flex">
          <Link to="/sign-in">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-primary transition-all duration-300 sm:flex hidden">
              Sign in
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-slate-600 text-white hover:bg-slate-700 transition-all duration-300 sm:flex hidden">
              Sign up
            </button>
          </Link>

          <CiMenuFries
            className="text-[1.8rem] mr-1 text-textc cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
        >
          <div className="relative mb-5">
            <input
              className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-primary"
              placeholder="Search..."
            />
            <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
          </div>
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
              home
            </li>
            <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">
              Features
            </li>
            <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
              Blogs
            </li>
            <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
              Shop
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
