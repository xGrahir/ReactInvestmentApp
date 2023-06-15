import React from 'react'
import styles from './Logo.module.css'
import logo from '../../../assets/investment-calculator-logo.png'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="Bag with money" />
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Logo