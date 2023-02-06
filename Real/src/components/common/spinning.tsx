import borde from '../../../public/borde.svg';

const spinning = (props) => {
    return spinninghtml(props);
  }

    function spinninghtml(props) {
        return (
            <>
                <div className="single-spinning-container flex relative w-52">
                    <img src={borde} className="animate-spin" />
                        <p className="flex justify-center items-center absolute inset-0 text-2xl text-center whitespace-pre-wrap">
                            {props.insideText}
                        </p>
                </div>
            </>
        );
    }
  
  export default spinning