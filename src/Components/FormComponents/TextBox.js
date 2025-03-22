import React, { useEffect, useState } from 'react'
import styles from './TextBox.module.css'
const TextBox = (props) => {
    const { name, value, onChange } = props
    const [data, setData] = useState(value)
    useEffect(() => {
        onChange(data)
    }, [data])
    return (
        <div
            className={styles.contant_input}>
            <label className={`${data ? styles['has-value'] : ''}`}>{name}</label>
            <input
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder='s'
                type='text' />
        </div>
    )
}

export default TextBox