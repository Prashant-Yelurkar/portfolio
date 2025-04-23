import React, { useEffect, useRef, useState } from 'react'
import styles from './TextBox.module.css'
const TextBox = (props) => {
    const { name, value, onChange, type = 'text' } = props

    const inputRef = useRef()

    return (
        <div
            className={styles.contant_input}>
            <label
                onClick={() => inputRef.current.focus()}
                className={`${value ? styles['has-value'] : ''}`}>{name}</label>
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder='s'
                type={type} />
        </div>
    )
}

export default TextBox