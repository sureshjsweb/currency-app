import { useDispatch, useSelector } from 'react-redux';
import { convert, fromUpdated, toUpdated } from '../../store/currency';
import Converter from '../Converter/Converter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const selectCurrency = useSelector(state => state.currency);

  return (<Converter
    {...selectCurrency}
    convert={() => dispatch(convert())}
    fromUpdated={(event) => dispatch(fromUpdated(event))}
    toUpdated={(event) => dispatch(toUpdated(event))}
  />);
}

export default App;
