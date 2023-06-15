import React, { useState } from 'react'
import styles from './Form.module.css'
import Wrapper from '../UI/Wrapper/Wrapper'
import Button from '../UI/Button/Button'

const Form = props => {
	const [currentSaving, changeSaving] = useState('')
	const [currentYearly, changeYearly] = useState('')
	const [currentExpected, changeExpected] = useState('')
	const [currentYear, changeYear] = useState('')

	const savingsHandler = e => {
		changeSaving(e.target.value)
	}

	const yearlySavingsHandler = e => {
		changeYearly(e.target.value)
	}

	const expectedInterestHandler = e => {
		changeExpected(e.target.value)
	}

	const durationHandler = e => {
		changeYear(e.target.value)
	}

	const formCheckHandler = e => {
		e.preventDefault()

		if (currentSaving && currentYearly && currentExpected && currentYear) {
			let data = {
				savings: parseInt(currentSaving),
				yearlySavings: parseInt(currentYearly),
				expectedInterest: parseInt(currentExpected),
				years: parseInt(currentYear),
			}

			props.getData(data)
		}
	}

	const resetHanlder = () => {
		changeSaving('')
		changeYearly('')
		changeExpected('')
		changeYear('')
		props.reset()
	}

	return (
		<Wrapper>
			<form action='' onSubmit={formCheckHandler}>
				<div className={styles.forms}>
					<div className={styles.form}>
						<label htmlFor='savings'>Current Savings ($)</label>
						<input type='number' name='' min='0' id='savings' onChange={savingsHandler} value={currentSaving} />
					</div>
					<div className={styles.form}>
						<label htmlFor='yearly'>Yearly Savings ($)</label>
						<input type='number' name='' min='0' id='yearly' onChange={yearlySavingsHandler} value={currentYearly} />
					</div>
				</div>
				<div className={styles.forms}>
					<div className={styles.form}>
						<label htmlFor='einterest'>Expected Interest (%, PER YEAR)</label>
						<input
							type='number'
							name=''
							min='0'
							id='einterest'
							onChange={expectedInterestHandler}
							value={currentExpected}
						/>
					</div>
					<div className={styles.form}>
						<label htmlFor='years'>Investment Duration (years)</label>
						<input type='number' name='' min='0' id='years' onChange={durationHandler} value={currentYear} />
					</div>
				</div>
				<div className={styles.buttons}>
					<Button type='reset' onClick={resetHanlder} className={styles.resetbtn}>
						Reset
					</Button>
					<Button type='submit'>Calculate</Button>
				</div>
			</form>
		</Wrapper>
	)
}

export default Form
