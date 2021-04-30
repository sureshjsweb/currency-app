import { React, Fragment } from 'react';
import Select from '../Select/Select';
import { convert } from '../../store/currency';

const Converter = ({ list, convert, fromUpdated, toUpdated }) => {
    return (<Fragment>
        <div className="flex-column"><h1>Currency Converter</h1></div>
        <div className="flex-row">
            <div><Select label="From" list={list} changed={fromUpdated}></Select></div>
            <div><Select label="To" list={list} changed={toUpdated}></Select></div>
            <div><button onClick={() => convert()}>Convert</button></div>
        </div>
    </Fragment>);
}

export default Converter;