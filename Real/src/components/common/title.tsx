import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


    function title(props: any) {

        const boxVariant = {
            visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, y:-100 }, 
        
        }
        
        return (
            <>
                <motion.h1 variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}}className="text-center my-5 font-zector">
                    {props.titleText}
                </motion.h1>
            </>
        );
    }
  
  export default title