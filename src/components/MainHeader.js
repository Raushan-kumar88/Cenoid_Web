import { NavLink } from 'react-router-dom';
import './MainHeader.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MainHeader = () => {
    return (
        <header className='header'>
        
           <div className="left">
           <img className='w-32' src="https://crocksi.xendekweb.com/wp-content/uploads/2023/04/CROCKSI-New-update.png" alt="demo"/>
           </div>
                <div className="right">
                <ul id='nav'>
                    <li>
                        <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/about-us'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/shop'>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/contact-us'>Contact Us</NavLink>
                    </li>
                    <li><NavLink  to=''>a <span className='w-6 bg-slate-400 px-1 rounded-full'>0</span></NavLink></li>
                    <li>
                        <NavLink  to=''>C</NavLink>
                    </li>
                </ul>
                </div>
        </header>
    );
};

export default MainHeader;