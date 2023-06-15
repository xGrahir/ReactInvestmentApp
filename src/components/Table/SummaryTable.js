import React from 'react'
import styles from './SummaryTable.module.css'
import TableItem from './TableItem'

const SummaryTable = props => {

    let currentTable = props.data.map(data => <TableItem data={data} key={Math.random()}></TableItem>)

	return (
		<table className={styles.table}>
			<thead className={styles.head}>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
                {currentTable}
				{/* <tr>
					<td>1</td>
					<td>$11,700,00</td>
					<td>$500</td>
					<td>$500</td>
					<td>$11,200,00</td>
				</tr> */}
			</tbody>
		</table>
	)
}

export default SummaryTable
