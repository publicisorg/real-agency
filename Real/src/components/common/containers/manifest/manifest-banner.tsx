import '../../../../styles/manifest/manifest.css';
import image from '../../../../../public/manifest.png'
import SpinningPublicis from '../../spinning-publicis'
import { useEffect, useState } from 'react'

const manifestbanner = () => {
    const [scrollY, setScrollY] = useState(0)
    function logit() {
        setScrollY(window.pageYOffset)
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener('scroll', logit)
        }
        watchScroll()
        return () => {
          window.removeEventListener('scroll', logit)
        }
    })

    return (
        <>
        <div className="text-center w-full relative">
            <img src={image} className="mx-auto my-8 w-11/12"/>
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