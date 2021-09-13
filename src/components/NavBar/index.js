import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import { AuthContext } from '../../Router/AuthProvider';
export default function NavBar() {

    const { currentUser, setCurrentUser } = useContext(AuthContext);
    return (
        <nav className='navbar navbar-expand navbar-dark bg-primary fixed-top'>
            <Link to={"/"} className='navbar-brand text-light font-weight-bolder'>
                <img
                    src={logo}
                    alt='logo'
                    width='40'
                    height='40'
                    className='vertical-align-middle'
                />
            </Link>

            <div className='collapse navbar-collapse'>
                <div className='navbar-nav'>
                    <Link className='nav-item nav-link' to='/frmadd'>
                        ลงทะเบียน
                    </Link>
                </div>

                {currentUser && <div>
                    <div className='navbar-nav'>
                        <Link to='' className='nav-item nav-link' onClick={() => { setCurrentUser(null) }}>
                            Logout
                        </Link>
                    </div>
                </div>}

            </div>
        </nav>
    )
}
