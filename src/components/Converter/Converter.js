import { React, Fragment } from 'react';
import Select from '../Select/Select';
import Input from './../Input/Input';

const Converter = ({ result, list, convert, fromUpdated, toUpdated }) => {
    return (<Fragment>
        <div className="flex-column">
            <h1 className="h3 mb-3 font-weight-normal">
                Currency Converter
            </h1>
        </div>
        <div className="flex-row">
            <Select
                label="From"
                list={list}
                changed={fromUpdated}
                selectValue="AUD"
                onConvert={() => convert()}>
            </Select>
            <Select
                label="To"
                list={list}
                changed={toUpdated}
                selectValue="CAD"
                onConvert={() => convert()}>
            </Select>
        </div>
        <div className="flex-row">
            <Input label="Value" type="text" value={1} convert={() => convert()} />
            <label className="mr-2">=</label>
            <label className="form-control col-md-3">{result}</label>
        </div>
    </Fragment>);
}

export default Converter;