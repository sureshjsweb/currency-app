const Input = ({ label, type, value, convert }) => {
    return (<div className="flex-row col-md-3 mb-3">
        <label className="line-height-35">{label}:</label>
        <input
            className="form-control"
            defaultValue={value}
            type={type}
            onChange={() => convert()} />
    </div>);
}

export default Input;