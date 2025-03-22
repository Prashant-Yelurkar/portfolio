import React from 'react'
import styles from './Button.module.css'
const Button = ({ name, fn }) => {
    return (
        <button
            onClick={fn}
            className={styles.button}>
            {name}
        </button>
    )
}

export default Button