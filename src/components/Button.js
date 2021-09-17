import PropTypes from 'prop-types'


const Button = ({text, onClick}) => {
    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    text: "this is a button",
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button;
