import { React, Fragment, useEffect } from 'react';
import Select from '../Select/Select';
import { loadCurrency } from '../../store/currency';
import { useSelector } from 'react-redux';

const Converter = ({ list }) => {
    return (<Fragment>
        <div className="flex-column"><h1>Currency Converter</h1></div>
        <div className="flex-row">
            <div><Select label="From" list={list}></Select></div>
            <div><Select label="To" list={list}></Select></div>
            <div><button>Convert</button></div>
        </div>
    </Fragment>);
}

export default Converter;