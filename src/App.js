import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarLogIn from "./components/NavBar/NavBarLogIn";
import NavBarLogOut from "./components/NavBar/NavBarLogOut";
import Footer from "./components/Footer/Footer";
import Login from "./components/Form/FormLogin";
import teamwork from "./teamwork1.png";

class App extends Component {
  user = {
    username: "",
    firstname: "",
    lastname: "",
    token: "",
    status: false,
    error: "",
  };

  constructor() {
    super();
    this.state = this.user;
    console.log("\n Data Start App Page : " + JSON.stringify(this.state));
  }
  Login = (details) => {
    console.log("\n Data in App Page : " + JSON.stringify(details));
    if (details.status === true) {
      this.setState({
        username: details.username,
        firstname: details.firstname,
        lastname: details.lastname,
        status: details.status,
        token: details.token,
        error: "",
      });
    } else {
      alert("พิสูจน์สิทธิ์การเข้าใช้งาน ล้มเหลว!!!");
      this.setState({
        username: "",
        firstname: "",
        lastname: "",
        status: false,
        token: "",
        error: "พิสูจน์สิทธิ์การเข้าใช้งาน ล้มเหลว!!!",
      });
    }
  };

  Logout = () => {
    console.log("LogOut");
    this.setState({
      username: "",
      firstname: "",
      lastname: "",
      status: false,
      token: "",
      error: "",
    });
  };

  render() {
    const { status, firstname, lastname, token, error } = this.state;
    return (
      <div className='containner'>
        <div className='p-3 mt-8'>
          {status !== false ? (
            <div>
              <div className='mb-4'>
                <NavBarLogIn
                  Token={token}
                  Status={status}
                  Logout={this.Logout}
                />
              </div>
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
                  onClick={this.Logout}
                  value='Logout'
                />
              </div>
            </div>
          ) : (
            <div>
              <div className='mb-4'>
                <NavBarLogOut Token={token} Status={status} />
              </div>
              <Login Login={this.Login} error={error} />
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
