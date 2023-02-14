import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


    function title(props: any) {

            const control = useAnimation();
            const [ref, inView] = useInView();
        
            const boxVariant = {
                visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
                hidden: { opacity: 0, y:-100 }, 
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
                <motion.h1 ref={ref} variants={boxVariant} animate={control} initial="hidden" className="text-center my-5 font-zector">
                    {props.titleText}
                </motion.h1>
            </>
        );
    }
  
  export default title