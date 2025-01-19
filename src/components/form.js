import '../style/style.css';

function FormComponent ({type, placeholder, value, onChange, onKeyDown, options}) {

    if(type === 'password'){
        return (
            <input type={'password'} className="NormalInput" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown} />
        );
    } else if(type === 'dropdown'){
        <select 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                onKeyDown={onKeyDown}
            >
                {options && options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
    } else {
        return (
            <input type={type || 'text'} className="NormalInput" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}  onKeyDown={onKeyDown}/>
        );
    }

}

export default FormComponent;