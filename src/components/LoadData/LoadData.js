import React, { Component } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class LoadData extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
    };
    console.clear();
  }

  componentDidMount() {
    this.LoadDataUser();
  }

  //async LoadDataUser () {
  LoadDataUser = async () => {
    // const url = "http://localhost:4000/LoadUser";
    const url = "http://localhost:4000/loaduser";
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     // "Content-Type": "application/json",
    //   },

    //   // body: JSON.stringify({ test: "hi" }),
    // };
    // await fetch(url, requestOptions)
    await fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else if (resp.status >= 400) {
          throw new Error("Bad Response from Server");
        } else {
          throw new Error("Something Error");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ person: data });
      })
      .catch((error) => {
        console.log("Error !", error);
      });
  };

  async AddUser() {
    const url = "http://localhost:4000/AddUser";
    const data = {
      aid: 1,
      firstname: "sutthie",
      lastname: "jul",
      company: "MTTS-31",
    };
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    };

    await fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((result) => {
        console.log("Result : ", result);
        console.log("firstname : ", result.firstname);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DelData(aid) {
    var url = "http://localhost:4000/DelData/" + aid;

    fetch(url)
      .then((res) => {
        console.log(res);
        //this.setState({ person: data });
      })
      .catch((error) => {
        console.log("Error !", error);
      });
  }

  EditData(aid) {
    var url = "http://localhost:4000/EditData/" + aid;

    fetch(url)
      .then((res) => {
        console.log(res);
        //this.setState({ person: data });
      })
      .catch((error) => {
        console.log("Error !", error);
      });
  }

  render() {
    var bodyStr = "ทดสอบ Load Data User !!!";
    return (
      <div>
        <div className='Containner m-3'>
          <h1 id='header'>{bodyStr}</h1>
        </div>
        <div className='container-fluid m-1'>
          <div className='table-responsive'>
            <table
              id='tb_data'
              className='table table-striped table-hover text-center'
            >
              <thead className='bg-primary'>
                <tr id='tr_header'>
                  <th>ID</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>อายุ</th>
                  <th>อีเมล์</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {this.state.person.map((pers) => (
                  <tr key={pers.id}>
                    <td>{pers.id}</td>
                    <td>{pers.fname}</td>
                    <td>{pers.lname}</td>
                    <td>{pers.age}</td>
                    <td>{pers.email}</td>
                    <td>
                      <a
                        className='btn btn-primary'
                        href='/'
                        onClick={(e) => {
                          e.preventDefault();

                          this.onEditData(pers.id);
                        }}
                      >
                        Edit
                      </a>
                      &nbsp;
                      <a
                        className='btn btn-danger'
                        href='/'
                        onClick={(e) => {
                          e.preventDefault();
                          if (window.confirm("ยืนยัน") === false) {
                            return false;
                          } else {
                            //alert("ลบ : " + pers.id);
                            //this.DelData(pers.id, "DELETE");
                            this.onDelData(pers.id);
                          }
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <button className='btn btn-primary' onClick={this.onAddData}>
              Add Data
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadData;
