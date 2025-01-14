import '../style/style.css';

function FormComponent ({type, placeholder, value, onChange, onKeyDown}) {

    if(type === 'password'){
        return (
            <input type={'password'} className="NormalInput" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown} />
        );
    } else {
        return (
            <input type={type || 'text'} className="NormalInput" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}  onKeyDown={onKeyDown}/>
        );
    }

}

export default FormComponent;