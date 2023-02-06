const title = (props) => {
    return titlehtml(props);
  }

    function titlehtml(props) {
        return (
            <>
                <h1 class="text-center my-5 font-zector">
                    {props.titleText}
                </h1>
            </>
        );
    }
  
  export default title