
import React, { useState, useEffect } from 'react'
import styles from "./Button.module.css";
import PropTypes from 'prop-types'

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Button = (props) => {
    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        let descripteurTimeout = undefined;
        if(isClicked) {
            descripteurTimeout = setTimeout(() => {
                setIsClicked(false)
            }, 100);
        }

        return () => {
            if(descripteurTimeout) {
                clearTimeout(descripteurTimeout);
            }
        };
    }, [isClicked])


    //console.log(props)
    return (
        <div>
            <button
                style={{
                    ...props.style,
                    backgroundColor: props.bgColor,
                }}
                className={isClicked ? styles.MyButton + ' ' + styles.clicked : styles.MyButton}
                onClick={(e) => {
                    props.onClick("ALO");

                    setIsClicked(true)
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
    bgColor: "white"
};





export default Button;