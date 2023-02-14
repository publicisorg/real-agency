import borde from '../../../public/borde.svg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function spinning(props: any) {

    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }, 
    }

    useEffect(() => {
        if (inView) {
            control.start('visible');
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <motion.div ref={ref} variants={boxVariant} animate={control} initial="hidden" className="single-spinning-container flex relative w-52 mb-12">
                <img src={borde} className="animate-spin" />
                <p className="flex justify-center items-center absolute inset-0 text-2xl text-center whitespace-pre-wrap">
                    {props.insideText}
                </p>
            </motion.div>
        </>
    );
}
  
  export default spinning