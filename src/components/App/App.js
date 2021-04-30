import { useDispatch, useSelector } from 'react-redux';
import { convert, fromUpdated, toUpdated, loadCurrency } from '../../store/currency';
import Converter from '../Converter/Converter';
import data from '../../data/currency.json';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const list = Object.keys(data.currencylist);
  dispatch(loadCurrency(list));
  const selectList = useSelector((state) => state.currency.list);
  return (<Converter
    list={selectList}
    convert={() => dispatch(convert())}
    fromUpdated={(event) => dispatch(fromUpdated(event))}
    toUpdated={(event) => dispatch(toUpdated(event))}
  />);
}

export default App;
