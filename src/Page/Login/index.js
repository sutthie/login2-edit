import React, { useContext, useState } from 'react'
import "./FormLogin.css";
import meeting from "../../components/Form/team-meeting.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from '../../Router/AuthProvider';
import { Redirect } from 'react-router-dom';
import axios from "axios";


export default function Login() {

  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [Username, setUsername] = useState()
  const [Password, setPassword] = useState()
  // const [error, seterror] = useState()



  const getText = (e) => {
    const { id, value } = e.target

    if (id == 'Username') {
      setUsername(value)
    }
    if (id == 'Password') {
      setPassword(value)
    }
  }

  const Login = async (e) => {
    e.preventDefault()
    const url = "ChkLogin"

    try {
      const result = await axios.post(url, { username: Username, password: Password })
      const { status, token, username, firstname, lastname } = result.data

      if (status == true) {
        setCurrentUser({ token, username, firstname, lastname })
      } else if (status == false) {
        console.log(result.data)
      }


    } catch (error) {
      console.log(error)
    }

  }


  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className='container login'>
        <div className='p-1'>
          <div className='col-md-6'>
            <img
              src={meeting}
              alt='logo'
              width='60%'
              height='60%'
              className='img'
            />
            <div>
              <h2 className='text-primary'>Login Page</h2>
              {/* {error !== "" ? <div className='text-danger'>{error}</div> : ""} */}
            </div>
            <form onSubmit={Login}>
              <div className='mb-3'>
                <label htmlFor='username'>UserName :</label>
                <input
                  type='text'
                  autoFocus
                  required
                  className='form-control text-primary'
                  placeholder='UserName'
                  name='username'
                  id='Username'
                  onChange={getText}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  required
                  className='form-control text-primary'
                  placeholder='รหัสผ่าน'
                  name='password'
                  id='Password'
                  onChange={getText}
                />
              </div>

              <div className='ml-1'>
                <input
                  type='checkbox'
                  name='remem'
                  id='remem'
                />
                <label htmlFor='remem' className='ml-2'>
                  จดจำ
                </label>
              </div>

              <div className='container text-center p-0'>
                <div className='row'>
                  <div className='col-md-9'>
                    <input
                      type='submit'
                      className='btn btn-primary'
                      value='เข้าระบบ'
                    />
                    <input
                      type='reset'
                      className='btn btn-danger'
                      value='Reset'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
