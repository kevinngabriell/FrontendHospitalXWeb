import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/style.css';

const Navigation = ({userRole, initialActive, URLPath}) => {
    const [activeItem, setActiveItem] = useState(initialActive || 'Home');
    const navigate = useNavigate();

    useEffect(() => {
        setActiveItem(initialActive);
    }, [initialActive]);

    const handleNavigation = (item, path) => {
        setActiveItem(item);
        navigate(path);
    };

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    };

    if(userRole === 'Admin'){
        return(
            <ul>
                <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleNavigation("Home", "/admin")}>
                    Dashboard
                </li>
                <li className={activeItem === 'Hospital' ? 'active' : ''} onClick={() => handleNavigation("Home", "/admin/hospital")}>
                    Hospital
                </li>
                <li className={activeItem === 'Package' ? 'active' : ''} onClick={() => handleNavigation("Home", "/admin/package")}>
                    Package
                </li>
                <li className={activeItem === 'Logout' ? 'active' : ''} onClick={handleLogout}>
                    Logout
                </li>
            </ul>
        );
    } else {
        return(
            <ul>
                <li>Belum tau uey</li>
            </ul>
        );
    }
}

export default Navigation;