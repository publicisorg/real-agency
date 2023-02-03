import '../../../../styles/reel/reel.css';
import video from '../../../../../public/reel.mp4';

const reel = () => {
    return reelhtml;
  }

  const reelhtml = (
    <div className="reel">
        <div className="reel-container">
            <video className="reel-video" width="100%" height="auto" controls>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="reel-title">
                <h3>Reel</h3>
            </div>
        </div>
    </div>
  );
  
  export default reel
  