import { useNavigate } from 'react-router-dom';
import '../style/style.css';
import { LoginProcess } from '../process/Login';

function Button ({type, text, func, data, path}){
    const navigate = useNavigate();

    const onClick = () => {
        if (func === 'login') {

          const result = LoginProcess(data);
          if(result.success){
            console.log('Berhasil');

            //Saving session if success login
            const saveSession = () => {
                const now = new Date().getTime(); // Current timestamp in milliseconds
                const oneHourLater = now + 60 * 60 * 1000; // 1 hour later
                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('role', result.role || 'user');
                sessionStorage.setItem('expiresAt', oneHourLater); // Store expiration time
            };

            saveSession();

            //Checking role and navigate based on the role 
            if(result.role === 'admin'){
                navigate('/admin');
            } else {
                console.log('warga biasa ajah')
            }
          } else {
            navigate('/', { state: { isLoginNotValid: true } });
            console.log('Gagal bos')
          }

        } else if (func === "NewSoftwarePackage"){

          console.log(data.packageType);

        } else {
          navigate(path);
        }
      };

    return(
        <button className='Button' onClick={onClick}>{text}</button>
    );
}

export default Button;