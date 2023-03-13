import borde from '../../../public/borde.svg';
import { motion } from "framer-motion";


function spinning(props: any) {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }, 
    }

    return (
        <>
            <motion.div variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}} className="single-spinning-container flex relative w-52 mb-12">
                <img src={borde} className="animate-spin" />
                <p className="flex justify-center items-center absolute inset-0 text-2xl text-center whitespace-pre-wrap">
                    {props.insideText}
                </p>
            </motion.div>
        </>
    );
}
  
  export default spinning