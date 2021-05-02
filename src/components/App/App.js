import { useDispatch, useSelector } from 'react-redux';
import Converter from '../Converter/Converter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const selectCurrency = useSelector(state => state.currency);

  return (<Converter
    {...selectCurrency}
    dispatch={dispatch}
  />);
}

export default App;
