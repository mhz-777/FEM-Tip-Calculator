import siteLogo from './images/logo.svg';
import './App.css';
import { useState } from 'react';
import Results from './components/Results';

function App() {

  // error state for invalid bill input
  const [invalidBill, setInvalidBill] = useState();

  //error state for invalid people input
  const [invalidPeople, setInvalid] = useState();

  //error state for invalid tip input
  const [invalidTip, isInvalid] = useState();

  //state to apply classes on button click
  const [isActive, setActive] = useState();

  //state to store inputted clean data
  const [data, setData] = useState({
    billValue: "",
    tipValue: "",
    persons: ""
  });

  //state to verify all inputs are clean
  const [isClean, setClean] = useState();

  const billErrorCheck = (e) => {
    if(e.target.value === '0' || e.target.value < 0) {
      setInvalidBill(true);
    }else {
      setInvalidBill(false);
      setData({...data, billValue: e.target.value});
    }
  }

  const peopleErrorCheck = (e) => {
    if(e.target.value === '0' || e.target.value < 0) {
      setInvalid(true);
    }else {
      setInvalid(false);
      setData({...data, persons: e.target.value});
    }
  }

  const tipErrorCheck = (e) => {
    if(isNaN(e.target.value) || e.target.value < 0 || e.target.value === '-0') {
      isInvalid(true);
    }else {
      isInvalid(false);
      setData({...data, tipValue: e.target.id});
    }
  }

  const handleClick = (e) => {
    setActive(e.target.id);
    setData({...data, tipValue: e.target.id});
    isInvalid(false);
  }

  const handleCustomClick = (e) => {
    setActive(e.target.value);
    setData({...data, tipValue: e.target.value});
  }

  // set clean state to valid when all inputs are error-free

  return (
    <div className="App">
      <div className="logo-container">
        <img src={siteLogo} alt="splitter logo" className='site-logo'/>
      </div>
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
              <button className={`tip-btn ${isActive === "0.05" ? "button-focus" : ""}`} id='0.05' onClick={handleClick}>5%</button>
              <button className={`tip-btn ${isActive === "0.15" ? "button-focus" : ""}`} id='0.15' onClick={handleClick}>15%</button>
              <button className={`tip-btn ${isActive === "0.50" ? "button-focus" : ""}`} id='0.50' onClick={handleClick}>50%</button>
            </div>
            <div className="right-column-container">
              <button className={`tip-btn ${isActive === "0.10" ? "button-focus" : ""}`} id='0.10' onClick={handleClick}>10%</button>
              <button className={`tip-btn ${isActive === "0.25" ? "button-focus" : ""}`} id='0.25' onClick={handleClick}>25%</button>
              <input 
                type="text"
                placeholder='Custom'
                className={`btn-custom ${isActive === "custom" ? "button-focus" : ""}`}
                id='custom'
                onChange={tipErrorCheck}
                onClick={handleCustomClick}
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
          <Results 
            amount={data.billValue}
            tip={data.tipValue}
            people={data.persons}
            
          />
      </div>
    </div>
  );
}

export default App;
