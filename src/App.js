import React, {useState} from 'react'
import Logo from './components/UI/Logo/Logo'
import Form from './components/UserForm/Form'
import Message from './components/Table/EmptyMessage'
import SummaryTable from './components/Table/SummaryTable'

function App() {

  let calculated = []

  const [currentShow, changeShow] = useState(<Message></Message>)

	const countData = data => {
    
		calculated = []
		let interest = (data.savings * data.expectedInterest) / 100
		let investedCapital = data.savings + data.yearlySavings
		let totalCapital = investedCapital + interest
		let totalInterest = interest

		for (let i = 0; i < data.years; i++) {
			calculated.push({
        year: i+1,
				totalCapital: totalCapital.toFixed(2),
				interest: interest.toFixed(),
				totalInterest: totalInterest.toFixed(),
				investedCapital: investedCapital.toFixed(2),
			})

			interest = (totalCapital * data.expectedInterest) / 100
			totalInterest += interest
			totalCapital += interest + data.yearlySavings
			investedCapital += data.yearlySavings
		}
    changeShow(<SummaryTable data={calculated}></SummaryTable>)
	}

  const resetHandler = () => {
    calculated = []
    changeShow(<Message></Message>)
  }
 
  
	return (
		<div>
			<Logo></Logo>
			<Form getData={countData} reset={resetHandler}></Form>
			{currentShow}
		</div>
	)
}

export default App
