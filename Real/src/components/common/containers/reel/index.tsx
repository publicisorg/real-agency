import '../../../../styles/reel/reel.css';
import video from '../../../../../public/reel.mp4';

const reel = () => {
    return reelhtml;
  }

  const reelhtml = (
    <div className="reel" id="reel">
        <div className="reel-container">
            <video className="reel-video" src={video} autoPlay muted loop/>
            <div className="reel-title">
                <h3>Reel</h3>
            </div>
        </div>
    </div>
  );
  
  export default reel
  