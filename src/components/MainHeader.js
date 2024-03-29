import { NavLink } from 'react-router-dom';
import './MainHeader.css';
import { AiFillShopping } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MainHeader = () => {
    return (
        <header className='header'>
        
           <div className="left">
           <img className='w-56' src="https://crocksi.xendekweb.com/wp-content/uploads/2023/04/CROCKSI-New-update.png" alt="demo"/>
           </div>
                <div className="right">
                <ul id='nav'>
                   <div className='flex max-sm:inline-block'>
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
                   </div>
                    <div className='flex max-sm:hidden'>
                    <li className=''><NavLink className='flex justify-center items-center space-x-1'  to=''><AiFillShopping/><span className='w-5 bg-slate-400 px-1.5 justify-center items-center rounded-full text-sm'>0</span></NavLink></li>
                    <li> <NavLink  to=''><BiSearch/></NavLink></li>
                    </div>
                </ul>
                </div>
        </header>
    );
};

export default MainHeader;