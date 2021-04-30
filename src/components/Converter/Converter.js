import { React } from 'react';
import CurrSelect from '../Select/Select';
import currencyData from '../../data/currency.json';
import { addCurrency } from '../../store/currency';
import { useDispatch, useSelector } from 'react-redux';

const Converter = () => {
    const { currency } = useSelector((state) => state.currency);
    const dispatch = useDispatch();
    return (<React.Fragment>
        <div className="flex-column"><h1>Currency Converter</h1></div>
        <div className="flex-row">
            <div><CurrSelect label="From" currencyList={currencyData.map(item => item.base)}></CurrSelect></div>
            <div><CurrSelect label="To" currencyList={currencyData.map(item => item.base)}></CurrSelect></div>
            <div><button onClick={() => dispatch(addCurrency('USD'))}>Convert</button></div>
        </div>
    </React.Fragment>);
}

export default Converter;