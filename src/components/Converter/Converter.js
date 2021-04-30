import { React, Fragment } from 'react';
import Select from '../Select/Select';
import { convert } from '../../store/currency';

const Converter = ({ list, convert, fromUpdated, toUpdated }) => {
    return (<Fragment>
        <div className="flex-column"><h1 className="h3 mb-3 font-weight-normal">Currency Converter</h1></div>
        <div className="flex-row">
            <Select label="From" list={list} changed={fromUpdated} selectValue="AUD"></Select>
            <Select label="To" list={list} changed={toUpdated} selectValue="CAD"></Select>
            <button className="btn btn-primary btn-sm ml-3 height-35" type="button" onClick={() => convert()}>Convert</button>
        </div>
    </Fragment>);
}

export default Converter;