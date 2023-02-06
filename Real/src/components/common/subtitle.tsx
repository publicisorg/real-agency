const subtitle = (props) => {
    return subtitlehtml(props);
  }

    function subtitlehtml(props) {
        return (
            <>
                <p className="font-vegawanty text-center text-xl whitespace-pre-wrap leading-4">
                    {props.subtitleText}
                </p>
            </>
        );
    }
  
  export default subtitle