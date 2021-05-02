import { React, Fragment } from 'react';
import { fromUpdated, toUpdated } from '../../store/currency';
import Select from '../Select/Select';
import Input from './../Input/Input';

const Converter = ({ srcValue, from, to, rates, crossvia, result, list, dispatch }) => {

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
                changed={(value) => dispatch(fromUpdated(value))}
                selectValue={from}>
            </Select>
            <Select
                label="To"
                list={list}
                changed={(value) => dispatch(toUpdated(value))}
                selectValue={to}>
            </Select>
        </div>
        <div className="flex-row">
            <Input
                label="Value"
                srcValue={srcValue}
                type="text"
                dispatch={dispatch}
                from={from}
                to={to}
                rates={rates}
                crossvia={crossvia}
            />
            <label className="mr-2">=</label>
            <label className="form-control col-md-3">{result}</label>
        </div>
    </Fragment>);
}

export default Converter;