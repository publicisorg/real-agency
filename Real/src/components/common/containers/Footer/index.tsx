import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// import {
//   FaInstagramSquare, FaTwitterSquare
// } from 'react-icons/Fa'

const Footers = () => {

    const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 13, delay: 0 } },
      hidden: { opacity: 0, scale: 0.8 }, 
    }
    const boxVariant2 = {
      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 13 , delay: 0.1 } },
      hidden: { opacity: 0, scale: 0.8 }, 
    }
    const boxVariant3 = {
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 13 , delay: 0.2 } },
        hidden: { opacity: 0, scale: 0.8 }, 
    }

  return (

    <footer className='container px-12 md:flex pb-12 md:pr-32'>
      <motion.div variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}} className="w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 169.41 60.76" className='w-28'><path d="m26.23 15.04 3.06 2.97v10.77c0 .27-.18.46-.46.46H15.42c-.27 0-.46-.18-.46-.46v-8.76l-.64-.73v9.49c0 .27-.18.46-.46.46H.46c-.27 0-.46-.18-.46-.46V.48C0 .21.18.03.46.03H22.9c4.11 0 6.39 2.28 6.39 6.39v3.51c0 2.6-1.19 4.15-3.06 5.11ZM14.96 8.06h-.64v4.65h.64V8.06ZM30.47 28.77V.48c0-.27.18-.46.46-.46h27.14c.27 0 .46.18.46.46V10.7c0 .27-.18.46-.46.46H45.34v.64h12.73c.27 0 .46.18.46.46v5.2c0 .23-.18.41-.46.41H45.34v.68h12.73c.27 0 .46.18.46.41v9.81c0 .27-.18.46-.46.46H30.93c-.27 0-.46-.18-.46-.46ZM84.53.37 89 18.25v10.49c0 .27-.18.46-.46.46H75.13c-.27 0-.46-.18-.46-.46v-5.75h-.64v5.75c0 .27-.18.46-.46.46H60.16c-.27 0-.46-.18-.46-.46V18.25L64.23.37c.09-.27.27-.37.5-.37h19.25c.27 0 .46.09.55.37ZM73.99 16.43h.73l-.09-8.39h-.55l-.09 8.39ZM113.13 29.22H90.64c-.27 0-.46-.18-.46-.46V.48c0-.27.18-.46.46-.46h13.96c.27 0 .46.18.46.46v17.61h8.07c.27 0 .46.18.46.46v10.22c0 .27-.18.46-.46.46ZM23.75 31.79l4.49 17.97v10.55c0 .28-.18.46-.46.46H14.9c-.28 0-.46-.18-.46-.46v-5.78h-.64v5.78c0 .28-.18.46-.46.46H.46c-.28 0-.46-.18-.46-.46V49.76l4.54-17.97c.09-.28.28-.37.5-.37H23.2c.28 0 .46.09.55.37Zm-9.99 16.14h.73l-.09-8.44h-.55l-.09 8.44ZM57.22 45.82v8.53c0 4.13-2.29 6.42-6.42 6.42H35.39c-4.13 0-6.42-2.29-6.42-6.42V37.84c0-4.13 2.29-6.42 6.42-6.42H50.8c4.13 0 6.42 2.29 6.42 6.42v6.42c0 .28-.18.46-.46.46H43.88c-.28 0-.46-.18-.46-.46v-4.77h-.64v13.2h3.3v-.64h-2.25c-.28 0-.41-.18-.41-.46v-5.78c0-.27.18-.46.46-.46h12.88c.28 0 .46.18.46.46ZM57.95 60.31V31.88c0-.28.18-.46.46-.46h23.7c.28 0 .46.18.46.46v10.27c0 .28-.18.46-.46.46H71.7v.64h10.41c.28 0 .46.18.46.46v5.23c0 .23-.18.41-.46.41H71.7v.69h10.41c.28 0 .46.18.46.41v9.86c0 .28-.18.46-.46.46h-23.7c-.28 0-.46-.18-.46-.46ZM83.31 60.31V31.88c0-.28.18-.46.46-.46h11.19c.18 0 .37.09.5.32l5.36 9.95h.55L98.57 36v-4.13c0-.28.18-.46.41-.46h12.01c.28 0 .46.18.46.46V60.3c0 .28-.18.46-.46.46H99.76c-.23 0-.37-.09-.5-.32l-5.5-10.22h-.5l2.89 5.96v4.13c0 .28-.18.46-.46.46H83.77c-.28 0-.46-.18-.46-.46ZM140.43 46.51v7.84c0 4.13-2.29 6.42-6.42 6.42H118.6c-4.13 0-6.42-2.29-6.42-6.42V37.84c0-4.13 2.29-6.42 6.42-6.42h15.41c4.13 0 6.42 2.29 6.42 6.42v7.11c0 .28-.18.46-.46.46h-12.88c-.28 0-.46-.18-.46-.46v-5.46h-.64v13.2h.64V46.5c0-.27.18-.46.46-.46h12.88c.28 0 .46.18.46.46ZM148.41 60.31v-5.78l-7.24-8.76V31.88c0-.28.18-.46.46-.46h12.88c.28 0 .46.18.46.46v10.36l.32.46.32-.46V31.88c0-.28.18-.46.46-.46h12.88c.28 0 .46.18.46.46v13.89l-7.24 8.76v5.78c0 .28-.18.46-.41.46h-12.88c-.28 0-.46-.18-.46-.46Z" className="fill-white"/></svg>
      </motion.div>
      <div className="w-1/2 pt-6 md:pt-0">
        <motion.p variants={boxVariant2} whileInView="visible" initial="hidden" viewport={{once: false}}>
          MMS Comunicaciones Argentina
        </motion.p>
        <motion.p variants={boxVariant2} whileInView="visible" initial="hidden" viewport={{once: false}}>
          Posta 4789 (1430)</motion.p>
        <motion.p variants={boxVariant2} whileInView="visible" initial="hidden" viewport={{once: false}}>
          Buenos Aires, <br />
          Argentina 
        </motion.p>
      </div>
      <motion.div variants={boxVariant3} whileInView="visible" initial="hidden" viewport={{once: false}} className="w-1/2">
        <p>
          <a href="mailto:holalreal@realagency.com.ar" className='text-white'>
            holalreal@realagency.com.ar
            </a>
          </p>
      </motion.div>
      {/* <div className="w-1/2 flex basis-4">
      <a
                 className="text-3xl pt-2 block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagramSquare  />
                </a>
                <a
                  className="text-3xl mx-3 pt-2 block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitterSquare />
                </a>
      </div> */}
    
   
      </footer>
 
  )
}
export default Footers