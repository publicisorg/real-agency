const subtitle = (props) => {
    return subtitlehtml(props);
  }

    function subtitlehtml(props) {
        return (
            <>
                <p className="font-vegawanty text-center text-2xl mx-4 sm:mx-0 sm:whitespace-pre-wrap sm:leading-4 ">
                    {props.subtitleText}
                </p>
            </>
        );
    }
  
  export default subtitle