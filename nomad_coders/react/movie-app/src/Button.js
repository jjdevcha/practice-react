import styles from './Button.module.css'
import PropTypes from "prop-types";

const Button = ({text, onClick}) => {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;