import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const subtitle = (props: any) => {
    return subtitlehtml(props);
  }

    function subtitlehtml(props: any) {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }, 
    }

        return (
            <>
                <motion.p variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}} className="font-vegawanty text-center text-2xl mx-4 sm:mx-0 sm:whitespace-pre-wrap sm:leading-4 ">
                    {props.subtitleText}
                </motion.p>
            </>
        );
    }
  
  export default subtitle