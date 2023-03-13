import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {

  const control = useAnimation();
    const [ref, inView] = useInView();

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
    const boxVariant4 = {
      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 13 , delay: 0.3 } },
      hidden: { opacity: 0, scale: 0.8 }, 
    }
    const boxVariant5 = {
      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 13 , delay: 0.4 } },
      hidden: { opacity: 0, scale: 0.8 }, 
    }

  return (
    <div className='container px-12 pb-6' id="contact">
        <motion.h3 variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}}  className='pb-3 sm:px-5 md:px-0'>CONTACT</motion.h3>
        <form className='md:flex'>
        <motion.input variants={boxVariant2} whileInView="visible" initial="hidden" viewport={{once: false}} type="text" name="name" id="nameInput" placeholder='NOMBRE Y APELLIDO' className='block w-full mx-auto mr-3 md:w-4/12 md:flex-1 rounded-lg mb-3 md:mb-0'/>
        <motion.input variants={boxVariant3} whileInView="visible" initial="hidden" viewport={{once: false}} type="text" name="name" id="nameInput" placeholder='E-MAIL' className='block w-full mx-auto mr-3 md:w-4/12 md:flex-1 rounded-lg mb-3 md:mb-0'/>
        <motion.input variants={boxVariant4} whileInView="visible" initial="hidden" viewport={{once: false}} type="text" name="name" id="nameInput" placeholder='MESSEGE' className='block w-full mx-auto mr-3 md:w-4/12 md:flex-1 rounded-lg mb-3 md:mb-0'/>
        <motion.input variants={boxVariant5} whileInView="visible" initial="hidden" viewport={{once: false}} type="submit" value="SEND" className='rounded-lg bg-white text-black px-5 py-1' />
        </form>
    </div>
  )
}
export default Contact
