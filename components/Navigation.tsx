import  { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu =() =>{
    setOpenMenu(false);
  }
  return (
    <>
      <header className="fixed w-4/5 box-border h-[7%] mt-2 flex justify-between min-h-[40px] items-center shadow-md inset-shadow-md shadow-zinc-400 rounded-full bg-zinc-300 px-8 text-xl">
        <img src="/logo.png" className="w-20 sm:w-36 h-auto " />
        <img
          src="hamburger.png"
          className="w-8 md:w-12 lg:hidden"
          onClick={() => {
            setOpenMenu(true);
          }}
        ></img>
        <nav className="hidden lg:flex gap-20 min-w-fit">
          <Link
            className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out "
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-800 ease-in-out "
            to="/events"
          >
            Events
          </Link>
          <Link
            className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out"
            to="/about"
          >
            About
          </Link>
        </nav>
      </header>
      {openMenu && (
        <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed z-50 top-0 right-0 bg-gray-100 h-screen w-screen">
          <button className="absolute top-0 right-0 w-20 h-20 p-5">
            {" "}
            <img
              src="close.png"
              alt=""
              onClick={changeMenu}
            />
          </button>
          <div className="mt-32 flex flex-col p-20 gap-32 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out "
              onClick={changeMenu}
              to="/"
            >
              Home
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-800 ease-in-out "
              to="/events" onClick={changeMenu}
            >
              Events
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out"
              to="/about" onClick={changeMenu}
            >
              About
            </Link>
          </div>
          </motion.div>
      )}
    </>
  );
}
