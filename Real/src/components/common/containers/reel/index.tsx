import '../../../../styles/reel/reel.css';
import video from '../../../../../public/reel.mp4';
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import React from 'react';

function reel() {
    const { scrollY } = useScroll()
    const [reelState, setReelState] = useState(false);
    const reelVideo = React.useRef<HTMLVideoElement>(null);

    const boxVariant = {
        visible: { opacity: 1, transition: { duration: 2 } },
        hidden: { opacity: 0 }, 
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 1500 && latest < 2900) {
          if (reelState == false) {
            setReelState(true);
            reelVideo.current.play()
            //reelVideo.current.muted = false;
          }
        } else {
          if (reelState == true) {
            setReelState(false);
            reelVideo.current.pause()
            //reelVideo.current.muted = true;
          }
        }
    })

    return (
    <motion.div variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: false}} className="reel" id="reel">
        <div className="reel-container">
            <motion.video ref={reelVideo} className="reel-video" src={video} autoPlay loop controls/>
            {/*<div className="reel-title">
                <h3>Reel</h3>
            </div>*/}
        </div>
    </motion.div>);
};
  
  export default reel
  