import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,

} from "react-router-dom";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Menu = () => {


  
  return <nav className="border-gray-200 bg-transparent px-2 py-9  dark:bg-transparent sm:px-4 rounded">
    <div className="mx-auto flex flex-wrap items-center justify-between">
      <a className="flex items-center" href="#">
        <img src="src/assets/logoReal.svg" className="mr-3 h-5 sm:h-6" alt="Real Logo" />
      </a>
      <div className="w-full md:block md:w-auto hidden">
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <Link activeClass="active" className="block py-2 text-xl text-white md:hover:text-gray-500" to="about" spy={true} smooth={true} duration={500} >ABOUT</Link>
          </li>
          <li>
            <Link activeClass="active" className="block py-2 text-xl text-white md:hover:text-gray-500" to="reel" spy={true} smooth={true} duration={500} >REEL</Link>

            </li>
            <li>
              <Link activeClass="active" className="block py-2 text-xl text-white md:hover:text-gray-500" to="work" spy={true} smooth={true} duration={500} >WORK</Link>
              </li>
                <Link activeClass="active" className="block py-2 text-xl text-white md:hover:text-gray-500" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                <li><a className="block py-2 text-xl text-white md:hover:text-gray-500" href="/navbars">ES</a></li>
              </ul>
            </div>
          </div>
        </nav>
}

        export default Menu

