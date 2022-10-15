import siteLogo from './images/logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [invalidBill, setInvalidBill] = useState();
  const [invalidPeople, setInvalid] = useState();
  const [invalidTip, isInvalid] = useState();
  const [isActive, setActive] = useState();

  let billValue = 0;
  let tipValue = 0;
  let persons = 0;

  const billErrorCheck = (e) => {
    if(e.target.value === '0' || e.target.value < 0) {
      setInvalidBill(true);
    }else {
      setInvalidBill(false);
      billValue = Number(e.target.value);
    }
  }

  const peopleErrorCheck = (e) => {
    if(e.target.value === '0') {
      setInvalid(true);
    }else {
      setInvalid(false);
      persons = Number(e.target.value);
    }
  }

  const tipErrorCheck = (e) => {
    if(isNaN(e.target.value) || e.target.value < 0 || e.target.value === '-0') {
      isInvalid(true);
    }else {
      isInvalid(false);
      tipValue = Number(e.target.value);
    }
  }

  const handleClick = (e) => {
    setActive(e.target.id);
    tipValue = e.target.id;
  }

  return (
    <div className="App">
      <img src={siteLogo} alt="splitter logo" className='centered'/>
      <div className="user-input-container">
          <div className="bill-input-container">
            <label htmlFor="bill">
            Bill
            {invalidBill === true && <p className='bill-error-message'>Must be greater then 0</p>}
            </label>
            <input
              type="text"
              name='billamount'
              id='billamount'
              onChange={billErrorCheck}
            />
          </div>
          <h3 className='tip-header'>Select Tip %</h3>
          <div className="tip-input-container">
            <div className="left-column-container">
              <button className={`tip-btn ${isActive === "5" ? "button-focus" : ""}`} id='5' onClick={handleClick}>5%</button>
              <button className={`tip-btn ${isActive === "15" ? "button-focus" : ""}`} id='15' onClick={handleClick}>15%</button>
              <button className={`tip-btn ${isActive === "50" ? "button-focus" : ""}`} id='50' onClick={handleClick}>50%</button>
            </div>
            <div className="right-column-container">
              <button className={`tip-btn ${isActive === "10" ? "button-focus" : ""}`} id='10' onClick={handleClick}>10%</button>
              <button className={`tip-btn ${isActive === "25" ? "button-focus" : ""}`} id='25' onClick={handleClick}>25%</button>
              <input 
                type="text"
                placeholder='Custom'
                id='btn-custom'
                onChange={tipErrorCheck}
               />
               {invalidTip === true && <p className='invalid-tip-error'>Zero or higher only.</p>}
            </div>
          </div>
          <div className="people-input-container">
            <label htmlFor="people" className='num-people-label'>
            Number of People
            {invalidPeople === true && <p className='error-message'> Can't be zero</p>}
            </label>
            <input 
              type="text" 
              name='people' 
              id='people-num'
              className={invalidPeople ? "error-border" : ""}
              pattern='^[1-9]\d*$'
              onChange={peopleErrorCheck}
             />
          </div>
      </div>
    </div>
  );
}

export default App;
