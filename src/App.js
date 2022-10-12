import siteLogo from './images/logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [invalidPeople, setInvalid] = useState();
  const [invalidTip, isInvalid] = useState();
  // const [isActive, setActive] = useState();

  const handleChange = (e) => {
    if(e.target.value === '0') {
      setInvalid(true);
    }else {
      setInvalid(false);
    }
  }

  const handleTip = (e) => {
    if(isNaN(e.target.value) || e.target.value < 0) {
      isInvalid(true);
    }else {
      isInvalid(false);
    }
  }

  /*const toggleFocus = () => {
    setActive(true);
  }*/

  return (
    <div className="App">
      <img src={siteLogo} alt="splitter logo" className='centered'/>
      <div className="user-input-container">
          <div className="bill-input-container">
            <label htmlFor="bill">Bill</label>
            <input
              type="text"
              name='billamount'
              id='billamount'
            />
          </div>
          <h3 className='tip-header'>Select Tip %</h3>
          <div className="tip-input-container">
            <div className="left-column-container">
              <button className="tip-btn">5%</button>
              <button className="tip-btn">15%</button>
              <button className="tip-btn">50%</button>
            </div>
            <div className="right-column-container">
              <button className="tip-btn">10%</button>
              <button className="tip-btn">25%</button>
              <input 
                type="text"
                placeholder='Custom'
                id='btn-custom'
                onChange={handleTip}
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
              onChange={handleChange}
             />
          </div>
      </div>
    </div>
  );
}

export default App;
