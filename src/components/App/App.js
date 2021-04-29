import './App.css';

function App() {
  return (<div>
    <div className="flex-column"><h1>Currency Converter</h1></div>
    <div className="flex-row">
      <div><label>From: <input type="text" /></label></div>
      <div><label>To: <input type="text" /></label></div>
    </div>
  </div>);
}

export default App;
