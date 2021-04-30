import "./Select.css";

const Select = ({ label, list, changed }) => {
    return (<div className="flex-row"><label>{label}:</label>
        <select className="form-control" onChange={(event) => changed(event.target.value)}>{
            list.map((item, index) => {
                return <option key={index}>{item}</option>
            })
        }</select></div>);
}

export default Select;