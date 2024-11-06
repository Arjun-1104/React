let ErrorMessages = ({foodItem}) => {

    return <>
        {foodItem.length===0?<h3 className="text-center">I'm still hungry.</h3>:null}
    </>
}

export default ErrorMessages;