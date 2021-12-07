import React from "react";

import styles from './Button.module.css';

export default function Button(props) {
    return <button onClick = {props.onClickHandler} type = {props.type || 'button'} className = {styles.button}>
        {props.children}
    </button>
}