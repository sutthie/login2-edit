import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  constructor() {
    super();
    // console.clear();
    // console.log(Cookies.get("menu"));
    this.state = {
      token: localStorage.getItem("token"),
    };
    console.log("token : " + this.state.token);
    // window.location.href = "/";
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token");

  //alert(data.token);
  // console.log("token : " + token);

  // if (this.state.token !== "") {

  // }
  // }

  render() {
    const { token } = this.state;
    return (
      <React.Fragment>
        <div className='container pt-5'>
          <div className='mt-4'>
            <div className='h3 text-danger'> หน้าแรก</div>

            <div>
              {token ? (
                <h2>ท่านได้รับการพิสูจน์สิทธิ์เข้าใช้งานแล้ว</h2>
              ) : (
                <h2>ท่านยังไม่ได้พิสูจน์สิทธิ์เพื่อเข้าใช้งาน</h2>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
