import { useEffect, useState } from 'react';
import '../../styles/common/noise-animation.css';

function NoiseCanvas() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <canvas id="tv" className="w-full h-full rounded-3xl" style={{
            opacity: `calc(2.2 - calc(${scrollPosition} * 0.003)`
        }}></canvas>
    );
}

export default NoiseCanvas;