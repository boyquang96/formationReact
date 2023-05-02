
import React from 'react'
import styles from "./Button.module.css";

const Button = (props) => {
    //console.log(props)
    return (
        <div>
            <button 
                className={styles.MyButton}
                onClick={(e) => {
                    props.onClick && props.onClick("ALLO");
                }} 
            > 
                {props.text} 
            </button>
        </div>
    )
};

export default Button;