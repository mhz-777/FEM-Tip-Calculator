import { useState } from 'react';
import './Results.css'

const Results = (props) => {

    // store results
    let tip = 0;
    let bill = 0;

    
    const calculateTip = () => {
        return(Number(props.amount * props.tip) / props.people);
    }

    const calculateFinal = () => {
        return(Number(props.amount / props.people) + ((props.amount * props.tip) / props.people));
    }

    if(props.valid === true) {
        tip = calculateTip();
        bill = calculateFinal();
    }

    const formatResult = (num) => {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }

    const reset = () => {
        window.location.reload();
    }


    return (
        <div className="dynamic-container">
            <div className="results-container">
                <div className="results-text-container">
                    <h1 className="results-heading">Tip Amount</h1>
                    <p className="subheading">/ person</p>
                    <h1 className="results-heading">Total</h1>
                    <p className="subheading">/ person</p>
                </div>
                <div className="results-data-container">
                    <h1 className="data-heading">{props.valid ? formatResult(tip) : "$0.00"}</h1>
                    <h1 className="data-heading">{props.valid ? formatResult(bill) : "$0.00"}</h1>
                    
                </div>
            </div>
            <button className="reset-button" onClick={reset}>RESET</button>
        </div>
    );
}

export default Results;