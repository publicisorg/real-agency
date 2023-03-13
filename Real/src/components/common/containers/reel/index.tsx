import '../../../../styles/reel/reel.css';
import video from '../../../../../public/reel.mp4';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function reel() {

    const boxVariant = {
        visible: { opacity: 1, transition: { duration: 2 } },
        hidden: { opacity: 0 }, 
    }

    return (
    <motion.div variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}} className="reel" id="reel">
        <div className="reel-container">
            <video className="reel-video" src={video} autoPlay muted loop/>
            {/*<div className="reel-title">
                <h3>Reel</h3>
            </div>*/}
        </div>
    </motion.div>);
};
  
  export default reel
  