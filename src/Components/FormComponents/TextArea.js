import React, { useEffect, useState } from 'react'
import styles from './TextArea.module.css'
const TextArea = (props) => {
    const { onChange, value, name, rows = 10 } = props;

    return (
        <div
            className={styles.contant_input}>
            <label className={`${value ? styles['has-value'] : ''}`}>{name}</label>
            <textarea
                rows={rows}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder='s'
                type='text' />
        </div>
    )
}

export default TextArea