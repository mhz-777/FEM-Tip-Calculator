import siteLogo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={siteLogo} alt="splitter logo" className='centered'/>
      <div className="user-input-container">
          <div className="bill-input-container">
            <label htmlFor="bill">Bill</label>
            <input type="text" name='billamount' id='billamount' />
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
              <button className="tip-btn btn-custom">Custom</button>
            </div>
          </div>
          <div className="people-input-container">
            <label htmlFor="people">Number of People</label>
            <input type="text" name='people' id='people-num' pattern='^[1-9]\d*$' />
          </div>
      </div>
    </div>
  );
}

export default App;
