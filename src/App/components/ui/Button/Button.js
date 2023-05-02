
import React from 'react'
import styles from "./Button.module.css";
import PropTypes from 'prop-types'

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Button = (props) => {
    console.log(props)
    return (
        <div>
            <button
                style={{
                    ...props.style,
                    backgroundColor: props.bgColor,
                    
                }}
                className={styles.MyButton}
                onClick={(e) => {
                    props.onClick("ALLO");
                    
                }}
            >
                {props.children}
            </button>
        </div>
    )
};

//définir les types des props
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    text: PropTypes.any.isRequired,
    bgColor: PropTypes.any.isRequired,
    style: PropTypes.object
};
//définir les valeurs des props par défaut
Button.defaultProps = {
    children: "hello",
    onClick: () => { },
    text: "default",
    bgColor:"white"
};

export default Button;