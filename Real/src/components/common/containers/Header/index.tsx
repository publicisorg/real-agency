import '../../../../styles/header/header.css';
import Subtitle from '../../subtitle';
import Title from '../../title';

const textSubtitle = `Our daily work, our core, \n
what we stand for moves us for a continuous search \n
 on unleashing creative value for brands. \n
Conneting strategies, ideas & people through \n
storytelling and cutting edge experiences. \n
We make things happen, tangible, shareable. \n
we make them.`;

const textTitle = "Shaping true connections";

const Header = () => {
    return headerhtml;
  }

  const headerhtml = (
    <>
    <div className="header" >
        <div className="bg-black">
            <div className="black-space"></div>
            <img src="real-02.svg" className="real-image"/>
            <div className="black-space"></div>
        </div>
          
          <iframe className="yt-video-real" 
        width="100%" height="100%"
        src="https://www.youtube.com/embed/s-rhii6znMU?autoplay=1&controls=0&mute=1&loop=1&version=3&vq=hd1080">
        </iframe>
    </div>
    <Title titleText={textTitle}/>
    <div className="text-center my-5">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 67.66 65.04" className='logoR'>

        <g id="Capa_2">
        </g>
        <g id="Capa_1">
          <g>
            <g>
              <path className="st1" d="M67.41,32.52c0,3.5-2.83,6.5-3.85,9.66c-1.06,3.27-0.58,7.36-2.56,10.08c-2,2.75-6.05,3.54-8.8,5.54
				c-2.72,1.98-4.72,5.6-7.99,6.66c-3.16,1.02-6.88-0.7-10.38-0.7c-3.5,0-7.22,1.72-10.38,0.7c-3.27-1.06-5.27-4.68-7.99-6.66
				c-2.75-2-6.8-2.79-8.8-5.54c-1.98-2.72-1.5-6.81-2.56-10.08c-1.02-3.16-3.85-6.16-3.85-9.66c0-3.5,2.83-6.5,3.85-9.66
				c1.06-3.27,0.58-7.36,2.56-10.08c2-2.75,6.05-3.54,8.8-5.54c2.72-1.98,4.72-5.6,7.99-6.66c3.16-1.02,6.88,0.7,10.38,0.7
				s7.22-1.72,10.38-0.7c3.27,1.06,5.27,4.68,7.99,6.66c2.75,2,6.8,2.79,8.8,5.54c1.98,2.72,1.5,6.81,2.56,10.08
				C64.58,26.02,67.41,29.02,67.41,32.52z"/>
            </g>
            <g>
              <path className="st2" d="M34.56,44.48v-7.56l-1.46-1.66l0,9.22l-11.27,0l0-23.93l19.03,0c3.26,0,4.98,1.72,4.98,4.98v2.99
				c0,1.87-0.75,3.12-2.35,3.94l-0.57,0.29l2.92,2.83l0,8.9L34.56,44.48z M33.1,31.35h1.46l0-4.87H33.1V31.35z"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <p className='font-vegawanty text-center text-xl'id="about"></p>
      <Subtitle subtitleText={textSubtitle}/>
    </>
  );
  
  export default Header
  