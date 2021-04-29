import "./CurrSelect.css";

const CurrSelect = ({ label, currencyList }) => {
    return (<label>{label}: <select className="form-control form-select-lg mb-3">{
        currencyList.map((item, index) => {
            return <option key={index}>{item}</option>
        })
    }</select></label>);
}

export default CurrSelect;