import { React, Fragment } from 'react';
import { fromUpdated, resultUpdated, toUpdated } from '../../store/currency';
import Select from '../Select/Select';
import Input from './../Input/Input';
import utils from './../../services/utils-service';

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
                changed={(event) => {
                    dispatch(fromUpdated(event.target.value));
                    if (!isNaN(srcValue))
                        dispatch(resultUpdated(utils.findCurrency(srcValue, crossvia, event.target.value, to, rates)))
                }}
                selectValue={from}>
            </Select>
            <Select
                label="To"
                list={list}
                changed={(event) => {
                    dispatch(toUpdated(event.target.value));
                    if (!isNaN(srcValue))
                        dispatch(resultUpdated(utils.findCurrency(srcValue, crossvia, from, event.target.value, rates)))
                }}
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