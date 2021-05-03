import { resultUpdated, valueUpdated } from "../../store/currency";
import utils from './../../services/utils-service';

const Input = ({ srcValue, from, to, rates, crossvia, label, type, dispatch }) => {
    return (<div className="flex-row col-md-3 mb-3">
        <label className="line-height-35">{label}:</label>
        <input
            className="form-control"
            defaultValue={1}
            type={type}
            onChange={(event) => {
                dispatch(valueUpdated(parseFloat(event.target.value)));
                dispatch(resultUpdated(utils.findCurrency(event.target.value, crossvia, from, to, rates)));
            }} />
    </div>);
}

export default Input;