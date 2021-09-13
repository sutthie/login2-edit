import React, { useContext } from 'react'
import { AuthContext } from '../../Router/AuthProvider';
import teamwork from "../../teamwork1.png"
export default function Home() {


    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { firstname, lastname } = currentUser

    return (
        <div>

            <div className='text-center m-2'>
                <img src={teamwork} alt='logo-main' className='w-25 h-25' />
            </div>
            <div>
                <h2>
                    WelCome : {firstname} {lastname}
                </h2>
            </div>
            <div>
                <input
                    type='button'
                    className='btn-danger'
                    onClick={() => { setCurrentUser(null) }}
                    value='Logout'
                />
            </div>
        </div>
    )
}
