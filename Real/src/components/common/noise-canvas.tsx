import { useEffect, useRef, useState } from 'react';
import '../../styles/common/noise-animation.css';
import { motion } from 'framer-motion';

function NoiseCanvas() {

    const scrollRef = useRef(null);

    useEffect(() =>{
        const script = document.createElement('script');

        script.src = "./js/noise.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <motion.canvas
            id="tv" 
            className="w-full h-full rounded-3xl pointer-events-none" 
            initial={{opacity: 1}}
            whileInView={{opacity:0, transition: {duration: 5}}}
            viewport={{once: false}}
        />
    );
}

export default NoiseCanvas;