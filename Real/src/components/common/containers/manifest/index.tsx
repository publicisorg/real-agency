import '../../../../styles/manifest/manifest.css';
import image from '../../../../../public/manifest.png'

const manifest = () => {
    return manifesthtml;
  }

  const manifesthtml = (
    <div id="manifest-container" className="text-center w-full relative">
      <img src={image} />
      <div id="manifest-text" className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <h3>Manifest</h3>
      </div>
    </div>
  );
  
  export default manifest