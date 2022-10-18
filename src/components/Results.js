import { useState } from 'react';
import './Results.css'

const Results = (props) => {

    // state to calculate only when inputs are valid
    const [ready, setReady] = useState();

    const calculateTip = () => {
        return((props.amount * props.tip) / props.people).toString();
    }

    const calculateFinal = () => {
        return((props.amount / props.people) + ((props.amount * props.tip) / props.people)).toString();
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
                    <h1 className="data-heading">{'$0.00'}</h1>
                    <h1 className="data-heading">{'$0.00'}</h1>
                    
                </div>
            </div>
            <button className="reset-button">RESET</button>
        </div>
    );
}

export default Results;