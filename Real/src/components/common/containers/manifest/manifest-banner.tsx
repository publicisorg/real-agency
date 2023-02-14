import '../../../../styles/manifest/manifest.css';
import image from '../../../../../public/manifest.png'
import SpinningPublicis from '../../spinning-publicis'
import NoiseAnimation from '../../noise-animation';
import { useEffect, useState, useRef } from 'react'

const manifestbanner = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [y, setY] = useState(0);
    const [auxPercentage, setAuxPercentage] = useState(0);
    const [effectPercentage, setPercentage] = useState(0);
    const [effectInvertedPercentage, setInvertedPercentage] = useState(0);

    const getPosition = () => {
      const y = boxRef.current?.offsetTop;
      if (y == undefined) {
        setY(0);
      } else {
        setY(y);
      }
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
      setAuxPercentage(((scrollPosition + 400 ) * 100) / y);
      if (auxPercentage > 100) {
        setPercentage(100);
        setInvertedPercentage(0);
      } else {
        setPercentage(auxPercentage);
        setInvertedPercentage(100 - effectPercentage);
      }
    });

    return (
        <>
        <div className="text-center relative" ref={boxRef} style={{
          transform: `translate(${effectInvertedPercentage}%) scale(${effectPercentage}%)`
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