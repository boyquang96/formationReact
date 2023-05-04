
import React, { useState, useEffect } from 'react'
import styles from "./Button.module.css";
import PropTypes from 'prop-types'



export interface IPropsButton {
    onClick?: Function,
    children: Array<React.ReactElement|string>|string|React.ReactElement,
    bgColor?: string,
    style:{}|undefined, //ou object  --> obligatoire mais qui peut etre undefined,
    text?: string //? --> pas obligatoire
    type?: 'button'|'submit'|'reset'|undefined
}

const Button: React.FC<IPropsButton> = (props) => {
    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        let descripteurTimeout: any = undefined;
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
            <button
                type={props.type}
                style={{
                    ...props.style,
                    backgroundColor: props.bgColor,
                }}
                className={isClicked ? styles.MyButton + ' ' + styles.clicked : styles.MyButton}
                onClick={(e) => {
                    //props.onClick("ALO");
                    //e.preventDefault()
                    setIsClicked(true)
                }}
            >
                {props.children}
            </button>
    )
};

//définir les types des props
Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    text: PropTypes.any.isRequired,
    bgColor: PropTypes.any.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['button', 'submit', 'reset', undefined])
};
//définir les valeurs des props par défaut
Button.defaultProps = {
    children: "hello",
    onClick: () => { },
    text: "default",
    bgColor: "white",
    type: 'button'
};





export default Button;