import '../../../../styles/manifest/manifest.css';
import SpinningPublicis from '../../spinning-publicis'
import NoiseAnimation from '../../noise-animation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

const manifestbanner = () => {

  const { scrollY } = useScroll()
  const [manifestState, setManifestState] = useState(false);
  const manifestVideo = React.useRef<HTMLVideoElement>(null);


  const boxVariant = {
    visible: { x: 0, scale: 1, transition: { duration: 1 } },
    hidden: { x: -300, scale: 0 }, 
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
      if (latest > 540 && latest < 1400) {
        if (manifestState == false) {
          setManifestState(true);
          manifestVideo.current.play()
          //manifestVideo.current.muted = false;
        }
      } else {
        if (manifestState == true) {
          setManifestState(false);
          manifestVideo.current.pause()
          //manifestVideo.current.muted = true;
        }
      }
  })

  return (
      <>
      <motion.div variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: true}} className="text-center relative">
          <motion.video ref={manifestVideo} src="https://desarrollodesitios0.site/real/manifest-eng.mp4" variants={boxVariant} whileInView="visible" initial="hidden" viewport={{once: true}} className="mx-auto my-8 rounded-3xl" controls loop muted>
            <source type="video/mp4" src="https://desarrollodesitios0.site/real/manifest-eng.mp4"/>
            Your browser does not support the video tag
          </motion.video>
          <NoiseAnimation />
          {/*<div id="manifest-text" className="absolute inset-0 flex items-center justify-center">
            <h3>Manifest</h3>
          </div>*/}
          <div id="manifest-logo" className="absolute right-4 -bottom-8 sm:right-36 flex items-center  sm:aux-neg-bottom ">
            <SpinningPublicis />
          </div>
      </motion.div>
  </>
  );
}

export default manifestbanner