import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import meeting from "./team-meeting.jpg";
import "./FormLogin.css";
// import { Redirect } from "react-router";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Cookies from "js-cookie";

class FormLogin extends Component {
  details = {
    token: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    status: false,
    remem: false,
    error: "",
  };

  constructor(props) {
    super(props);

    this.state = this.details;
  }

  onUserNameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  onPWDChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onRememChange = (e) => {
    this.setState({ remem: Boolean(e.target.checked) });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const url = "ChkLogin";

    await axios
      .post(url, this.state)
      .then((result) => {
        if (result.data.status === true) {
          console.log("\nData Result : " + JSON.stringify(result.data));
          // console.log("\ntoken : ", result.data.token);
          // console.log("\nfirstname : ", result.data.firstname);
          // console.log("\nlastname : ", result.data.lastname);

          const dat = {
            token: result.data.token,
            username: this.state.username,
            password: "",
            firstname: result.data.firstname,
            lastname: result.data.lastname,
            status: true,
            remem: this.state.checked,
            error: "",
          };

          console.log("\nData Return to App.js : " + JSON.stringify(dat));
          this.props.Login(dat); // this function is App for Display Data in From
        } else {
          const dat = {
            token: "",
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            status: false,
            remem: false,
            error: "",
          };
          this.props.Login(dat); // this function is App for Display Data in From
        }
      })
      .catch((error) => {
        // console.error("There was an error!", error);
        const dat = {
          token: "",
          username: "",
          password: "",
          firstname: "",
          lastname: "",
          status: false,
          remem: false,
          error: error,
        };
        this.props.Login(dat); // this function is App for Display Data in From
      });
  };

  onReset = (e) => {
    e.preventDefault();
    this.setState({
      token: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      status: false,
      remem: false,
      error: "",
    });
  };

  render() {
    const { username, password, remem } = this.state;
    const { error } = this.props.error;
    return (
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
              {error !== "" ? <div className='text-danger'>{error}</div> : ""}
            </div>
            <form
              onSubmit={(e) => this.onSubmit(e)}
              onReset={(e) => this.onReset(e)}
            >
              <div className='mb-3'>
                <label htmlFor='username'>UserName :</label>
                <input
                  type='text'
                  autoFocus
                  required
                  className='form-control text-primary'
                  placeholder='UserName'
                  name='username'
                  id='username'
                  value={username}
                  onChange={(e) => this.onUserNameChange(e)}
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
                  id='password'
                  value={password}
                  onChange={(e) => this.onPWDChange(e)}
                />
              </div>

              <div className='ml-1'>
                <input
                  type='checkbox'
                  name='remem'
                  id='remem'
                  checked={remem}
                  onChange={(e) => this.onRememChange(e)}
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
      // </div>
    );
  }
}
export default FormLogin;
