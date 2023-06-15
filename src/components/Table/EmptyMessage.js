import React from 'react'
import styles from './EmptyMessage.module.css'

const EmptyMessage = () => {
    return(
        <div className={styles.message}>
            <p>Nothing to show</p>
        </div>
    )
}

export default EmptyMessage