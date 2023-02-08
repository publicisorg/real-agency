import '../../styles/common/noise-animation.css';
import NoiseCanvas from './noise-canvas';

function noiseanimation() {
    return (
        <>
            <div id="fpsstats" className="hidden"></div> 
            <NoiseCanvas />
        </>
    );
};
  
export default noiseanimation