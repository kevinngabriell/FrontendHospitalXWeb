import { useEffect, useState } from 'react';
import Button from '../components/button';
import FormComponent from '../components/form';
import '../style/grid.css'; 
import Carousel from '../components/carousel';
import '../style/text.css';
import { LoginProcess } from '../process/Login';
import { useNavigate } from 'react-router-dom';

function Login ({isLoginNotValid}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notValidLogin, setNotValidLogin] = useState(false);
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            LoginProcess({username, password});
            // LoginProcess({username, password});
        }
    };

    useEffect(() => {
        setNotValidLogin(isLoginNotValid);

        // Check session expiration and redirect if valid
        const expiresAt = sessionStorage.getItem('expiresAt');
        const role = sessionStorage.getItem('role');
        const now = new Date().getTime();

        if (expiresAt && now < expiresAt) {
            console.log('Session is valid. Redirecting...');
            if (role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/dashboard');
            }
        } else {
            console.log('Session expired or not found. Please log in.');
            sessionStorage.clear(); // Clear session data if expired
        }
    }, [isLoginNotValid, navigate]);

    return(
        <div className="container">
            <div className='column center'>
                <Carousel/>
            </div>
            <div className='column center'>
                <h1>Hospital X</h1>
                {notValidLogin ? (
                    <p>Your username or password is not valid !!</p>
                ) : (
                    <p style={{width: "60%", marginBottom: "7%"}}>Welcome to Hospital X, where we provide exceptional healthcare services with a focus on
                patient satisfaction. Log in to access your account, manage appointments, and others</p>
                )}
                <FormComponent placeholder={'Please input your username'} type={'email'} value={username} onChange={setUsername} onKeyDown={handleKeyPress}/>
                <FormComponent placeholder={'Please input your password'} type={'password'} value={password} onChange={setPassword} onKeyDown={handleKeyPress}/>
                <Button text={'Login'} func={'login'} data={{username, password}}/>
            </div>
        </div>
    );
}

export default Login;