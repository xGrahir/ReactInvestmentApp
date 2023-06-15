import React from 'react'

const TableItem = (props) => {
    return (
        <tr>
            <td>{props.data.year}</td>
            <td>${props.data.totalCapital}</td>
            <td>${props.data.interest}</td>
            <td>${props.data.totalInterest}</td>
            <td>${props.data.investedCapital}</td>
        </tr>
    )
}

export default TableItem