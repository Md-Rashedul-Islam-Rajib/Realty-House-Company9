import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {

  const {user,logOutUser} = useContext(AuthContext);
  const handleSignOut = () => {
    logOutUser()
    
  }
    const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
        
        {user && <li><NavLink to='/userprofile'>Profile</NavLink></li>
        }
        {user && <li><NavLink to='/updateprofile'>Update Profile</NavLink></li>
        }
        {!user && <li><NavLink to='/register'>Register</NavLink></li>
        }
        

    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handleSignOut} className='btn bg-[#024CB5] text-white'>Log Out</button> :<Link to='/login' className="btn bg-[#024CB5] text-white">Login</Link>
    }
  </div>
</div>
    );
};

export default Navbar;