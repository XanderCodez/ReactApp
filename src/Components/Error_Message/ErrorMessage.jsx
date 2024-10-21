import invalid_location from '../../Images/invalid-location.png';
import './ErrorMessage.css'

const ErrorMessage = ({ style, errorInfo }) => {

    return (

        <div className='error-message' style={style}>

            <img src={invalid_location} />

            <p>{errorInfo}</p>

        </div>

    )

}

export default ErrorMessage
