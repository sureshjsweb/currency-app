import CurrSelect from './../CurrSelect/CurrSelect';
import currency from '../../data/currency.json';
import './App.css';

function App() {
  return (<div>
    <div className="flex-column"><h1>Currency Converter</h1></div>
    <div className="flex-row">
      <div><CurrSelect label="From" currencyList={currency.map(item => item.base)}></CurrSelect></div>
      <div><CurrSelect label="To" currencyList={currency.map(item => item.base)}></CurrSelect></div>
    </div>
  </div>);
}

export default App;
