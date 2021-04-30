const Select = ({ label, list, changed, selectValue }) => {
    return (<div className="flex-row col-md-3 mb-3"><label className="line-height-35">{label}:  </label>
        <select className="form-control" onChange={(event) => changed(event.target.value)} defaultValue={selectValue}>{
            list.map((item, index) => {
                return <option key={index}>{item}</option>
            })
        }</select></div>);
};

export default Select;