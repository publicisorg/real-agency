import React from "react";
const Menu = () => {


  
  return <nav className="border-gray-200 bg-transparent px-2 py-9  dark:bg-transparent sm:px-4 rounded">
    <div className="mx-auto flex flex-wrap items-center justify-between">
      <a className="flex items-center" href="#">
        <img src="src/assets/logoReal.svg" className="mr-3 h-5 sm:h-6" alt="Real Logo" />
      </a>
      <div className="w-full md:block md:w-auto hidden">
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <a className="block py-2 text-xl text-white md:hover:text-gray-500" href="#about">ABOUT</a>
          </li>
          <li>
            <a  className="block py-2 text-xl text-white md:hover:text-gray-500"  href="#reel">REEL</a>

            </li>
            <li>
              <a  className="block py-2 text-xl text-white md:hover:text-gray-500" href="#work"  >WORK</a>
              </li>
                <a className="block py-2 text-xl text-white md:hover:text-gray-500"  href="#contact">Contact</a>
                <li><a className="block py-2 text-xl text-white md:hover:text-gray-500" href="/navbars">ES</a></li>
              </ul>
            </div>
          </div>
        </nav>
}

        export default Menu

