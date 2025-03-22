import React, { useEffect, useState } from 'react'
import styles from './TextArea.module.css'
const TextArea = (props) => {
    const { onChange, value, name, rows = 10 } = props;
    const [data, setData] = useState(value)

    useEffect(() => {
        onChange(data)
    }, [data])
    return (
        <div
            className={styles.contant_input}>
            <label className={`${data ? styles['has-value'] : ''}`}>{name}</label>
            <textarea
                rows={rows}
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder='s'
                type='text' />
        </div>
    )
}

export default TextArea