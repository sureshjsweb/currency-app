import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrency } from '../../store/currency';
import Converter from '../Converter/Converter';
import data from '../../data/currency.json';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const list = Object.keys(data.currencylist);
  dispatch(loadCurrency(list));
  const selectList = useSelector((state) => state.currency.list);
  useEffect(() => {

  }, [list]);
  return (<div><Converter list={selectList} /></div>);
}

export default App;
