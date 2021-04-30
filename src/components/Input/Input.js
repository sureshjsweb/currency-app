const Input = ({ label, type }) => {
    return (<div className="flex-row col-md-3 mb-3"><label className="line-height-35">{label}:</label><input className="form-control" type={type} /></div>);
}

export default Input;