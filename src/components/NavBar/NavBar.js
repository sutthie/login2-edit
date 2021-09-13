import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Formadd from "../Form/FormAdd";
import Logout from "../Form/FormLogout";
import Home from "../Home/Home";

class NavBar extends Component {
  constructor(props) {
    super(props);
    // console.clear();
    this.state = {
      status: this.props.Status,
      token: this.props.Token,
    };
    // token: localStorage.getItem("token")
    // console.log(Cookies.get("menu"));
    console.log(
      "token : " + this.state.token + "\nStatus : " + this.state.status
    );
    // window.location.href = "/";
  }
  render() {
    const { status } = this.state;
    // const { status, token } = this.state;
    return (
      <div>
        <div>
          {status === false ? (
            <div>
              <Switch>
                {/* <Route exact path='/' component={home} /> */}
                <Route exact path='/frmadd' component={Formadd} />
                {/* <Route exact path='/home' component={Home} /> */}
                {/* <Route exact path='/logout' component={logout} /> */}
              </Switch>
            </div>
          ) : (
            <div>
              <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/frmadd' component={Formadd} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/logout' component={Logout} />
              </Switch>
            </div>
          )}
        </div>
        <div>
          <nav className='navbar navbar-expand navbar-dark bg-primary fixed-top'>
            <Link
              to={"/"}
              className='navbar-brand text-light font-weight-bolder'
            >
              <img
                src={logo}
                alt='logo'
                width='40'
                height='40'
                className='vertical-align-middle'
              />
              {/* <span className=''>Main</span> */}
            </Link>

            <div className='collapse navbar-collapse'>
              {status === false ? (
                <div className='navbar-nav'>
                  <Link className='nav-item nav-link' to='/frmadd'>
                    ลงทะเบียน
                  </Link>
                </div>
              ) : (
                <div>
                  <div className='navbar-nav'>
                    <Link className='nav-item nav-link' to='/'>
                      หน้าแรก
                    </Link>
                  </div>

                  <div className='navbar-nav'>
                    <Link className='nav-item nav-link' to='/logout'>
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default NavBar;
