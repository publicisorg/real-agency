import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const subtitle = (props: any) => {
    return subtitlehtml(props);
  }

    function subtitlehtml(props: any) {

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
                <motion.p ref={ref} variants={boxVariant} animate={control} initial="hidden" className="font-vegawanty text-center text-2xl mx-4 sm:mx-0 sm:whitespace-pre-wrap sm:leading-4 ">
                    {props.subtitleText}
                </motion.p>
            </>
        );
    }
  
  export default subtitle