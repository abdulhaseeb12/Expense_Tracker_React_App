import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import './Footer.css'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(1);
    return (
        <>
            <h4 className="balance"> Current Balance</h4>
            <h1 className="balance">{total} PKR</h1>
        </>
    )
}
