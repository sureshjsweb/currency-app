import "./Select.css";

const Select = ({ label, currencyList }) => {
    return (<label>{label}: <select className="form-control">{
        currencyList.map((item, index) => {
            return <option key={index}>{item}</option>
        })
    }</select></label>);
}

export default Select;