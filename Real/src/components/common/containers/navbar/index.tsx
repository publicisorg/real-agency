import React from "react";
import { Link } from "react-scroll";
const Menu = () => {


  
  return <nav className="border-gray-200 bg-black px-2 py-9 z-[9999] top-0 dark:bg-black fixed w-full left-0 sm:px-4 rounded">
    <div className="mx-auto container flex flex-wrap items-center justify-between">
      <a className="flex items-center" href="#">
        <img src="src/assets/logoReal.svg" className="mr-3 h-5 sm:h-6" alt="Real Logo" />
      </a>
      <div className="w-full md:block md:w-auto hidden">
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <Link className="block py-2 text-xl text-white md:hover:text-gray-500" activeClass="active" smooth spy to="about">ABOUT</Link>
          </li>
          <li>
          <Link className="block py-2 text-xl text-white md:hover:text-gray-500" activeClass="active" smooth spy to="reel">REEL</Link>

            </li>
            <li>
            <Link className="block py-2 text-xl text-white md:hover:text-gray-500" activeClass="active" smooth spy to="work">WORK</Link>
              </li>
              <Link className="block py-2 text-xl text-white md:hover:text-gray-500" activeClass="active" smooth spy to="c">Contact</Link>
                <li><a className="block py-2 text-xl text-white md:hover:text-gray-500" href="/navbars">ES</a></li>
              </ul>
            </div>
          </div>
        </nav>
}

        export default Menu

