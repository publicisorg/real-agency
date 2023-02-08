import '../../../../styles/manifest/manifest.css';
import image from '../../../../../public/manifest.png'
import SpinningPublicis from '../../spinning-publicis'
import NoiseAnimation from '../../noise-animation';
import { useEffect, useState, useRef } from 'react'

const manifestbanner = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [y, setY] = useState<number | undefined>();
    const getPosition = () => {
      const y = boxRef.current?.offsetTop;
      setY(y);
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        getPosition();
        window.addEventListener("resize", getPosition);
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
      if (scrollPosition > y) {
        setScrollPosition(y);
      }
    });

    return (
        <>
        <div className="text-center relative" ref={boxRef} style={{
          transform: `translate(calc(${y}px - ${scrollPosition}px - 100px)) scale(calc(0.5 + calc(${scrollPosition} * 0.0005)))`
        }}>
            <img src={image} className="mx-auto my-8 rounded-3xl"/>
            <NoiseAnimation />
            <div id="manifest-text" className="absolute inset-0 flex items-center justify-center">
              <h3>Manifest</h3>
            </div>
            <div id="manifest-logo" className="absolute right-4 -bottom-8 sm:right-36 flex items-center  sm:aux-neg-bottom ">
              <SpinningPublicis />
            </div>
        </div>
    </>
    );
  }

export default manifestbanner