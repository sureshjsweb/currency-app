import { resultUpdated, valueUpdated } from "../../store/currency";

const Input = ({ srcValue, from, to, rates, label, type, dispatch }) => {
    const convertCurrency = (source) => {
        console.log(from.toString(), to.toString(), source, rates);
        const result = rates.filter(rate => {
            return rate.base === from.toString() && rate.terms === to.toString();
            // return rate.base == from && rate.terms == to;
        });
        console.log(result);
        if (result.length > 0) {
            console.log(source * parseFloat(result[0].termsValue));
            return source * parseFloat(result[0].termsValue);
        }
    };
    return (<div className="flex-row col-md-3 mb-3">
        <label className="line-height-35">{label}:</label>
        <input
            className="form-control"
            defaultValue={srcValue}
            type={type}
            onChange={(event) => { dispatch(valueUpdated(parseInt(event.target.value))); dispatch(resultUpdated(convertCurrency(event.target.value))); }} />
    </div>);
}

export default Input;