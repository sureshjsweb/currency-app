import "./Select.css";

const Select = ({ label, list }) => {
    return (<label>{label}: <select className="form-control">{
        list.map((item, index) => {
            return <option key={index}>{item}</option>
        })
    }</select></label>);
}

export default Select;