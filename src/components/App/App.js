import { useDispatch, useSelector } from 'react-redux';
import { convert, fromUpdated, toUpdated, loadCurrency, loadCrossVia } from '../../store/currency';
import Converter from '../Converter/Converter';
import data from '../../data/currency.json';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const list = Object.keys(data.currencylist);

  dispatch(loadCurrency(list));
  dispatch(loadCrossVia(data.crossvia));

  const selectList = useSelector((state) => state.currency.list);
  const selectResult = useSelector(state => state.currency.result);

  return (<Converter
    list={selectList}
    result={selectResult}
    convert={() => dispatch(convert())}
    fromUpdated={() => dispatch(fromUpdated())}
    toUpdated={() => dispatch(toUpdated())}
  />);
}

export default App;
