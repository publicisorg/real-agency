import '../../../../styles/manifest/manifest.css';
import Spinning from '../../spinning'
import ManifestBanner from './manifest-banner'
import Subtitle from '../../subtitle'
import Title from '../../title'

const subtitleText = `THE REAL THING.`;

const spin1 = `Live \n Experiences \n & \n Activation.`;
const spin2 = `Innmersive \n Tech`;
const spin3 = `Talent.`;

const manifest = () => {
    return manifesthtml;
  }

  const manifesthtml = (
    <>
    <div className="py-8 sm:py-16">
      <ManifestBanner />
      <div className="flex justify-between items-center w-11/12 mx-auto my-12">
        <svg className="w-6 hidden sm:block" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.15 23.15">
          <circle className="cls-1" cx="11.57" cy="11.57" r="8.19"/>
          <line className="cls-1" x1="11.57" x2="11.57" y2="23.15"/>
          <line className="cls-1" x1="0" y1="11.57" x2="23.15" y2="11.57"/>
        </svg>
      <Subtitle subtitleText={subtitleText}/>
        <svg className="w-6 hidden sm:block" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.15 23.15">
          <circle className="cls-1" cx="11.57" cy="11.57" r="8.19"/>
          <line className="cls-1" x1="11.57" x2="11.57" y2="23.15"/>
          <line className="cls-1" x1="0" y1="11.57" x2="23.15" y2="11.57"/>
        </svg>
      </div>
      <Title titleText=""/>
      <Title titleText="THE REAL THING"/>
      <div className="flex flex-col sm:flex-row justify-between items-center w-10/12 max-w-4xl mx-auto my-12 wow bounceInUp">
        <Spinning insideText={spin1}/>
        <Spinning insideText={spin2}/>
        <Spinning insideText={spin3}/>
      </div>
    </div>
    </>
  );
  
  export default manifest