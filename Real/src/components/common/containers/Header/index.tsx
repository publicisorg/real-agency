import '../../../../styles/header/header.css';

const Header = () => {
    return headerhtml;
  }

  const headerhtml = (
    <div className="header">
        <div className="bg-black">
            <div className="black-space"></div>
            <img src="real-02.svg" className="real-image"/>
            <div className="black-space"></div>
        </div>
          
          <iframe className="yt-video-real" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/cH7VBI4QQzA?autoplay=1&controls=0&mute=1&loop=1">
        </iframe>
    </div>
  );
  
  export default Header
  