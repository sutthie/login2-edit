import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormAdd.css";
import meeting from "./team-meeting.jpg";

//className Login extends Component {
class FormAdd extends Component {
  initialState = {
    aid: 0,
    firstname: "",
    lastname: "",
    sex: 0,
    birthday: "",
    question: 0,
    answers: "",
    username: "",
    password: "",
    repassword: "",
    mobile: "",
    email: "",
    picture: "",
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
    console.clear();
    // this.onFirstNameChange = this.onFirstNameChange.bind(this);
  }

  onFirstNameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };

  onLastNameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  onUserNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onPWDChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onRePWDChange = (e) => {
    this.setState({
      repassword: e.target.value,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onMobileChange = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };

  onSexChange = (e) => {
    this.setState({
      sex: e.target.value,
    });
  };

  // onQuestionChange = (e) => {
  //   this.setState({
  //     question: e.target.value,
  //   });
  // };

  onAnswerChange = (e) => {
    this.setState({
      answers: e.target.value,
    });
  };

  onBirthdayChange = (e) => {
    this.setState({
      birthday: e.target.value,
    });
  };

  onFileChange = (e) => {
    this.setState({
      picture: e.target.value,
    });
  };

  onLogin = (e) => {
    e.preventDefault();

    window.location.href = "/";
  };

  onSubmit = async (e) => {
    //alert("Submit");
    e.preventDefault();

    //get data from backend by sending by form
    const url = "http://localhost:4000/AddUser";
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(this.state),
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

        if (result.status === true) {
          // set cookie status login
          // Cookies.set("menu", true);
          alert("บันทึกเรียบร้อยแล้ว !!!");
          // window.location.href = "/";
        } else {
          // Cookies.set("menu", false);
          alert("การบันทึกล้มเหลว!!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onReset = (e) => {
    alert("Reset");
    e.preventDefault();
    this.setState(() => this.initialState);
  };

  render() {
    const {
      // aid,
      firstname,
      lastname,
      sex,
      birthday,
      question,
      answers,
      username,
      password,
      repassword,
      mobile,
      email,
      picture,
    } = this.state;
    return (
      <div className='container register'>
        <form onSubmit={this.onSubmit} onReset={this.onReset}>
          <div className='row'>
            <div className='col-md-3 register-left'>
              <img src={meeting} className='img-thumbnail' alt='' />
              <h3>ต้อนรับสู่เว็บ</h3>
              <p>ข้อมูลจะถูกเก็บเป็นความลับ!</p>
              <input
                className='btn btn-success'
                type='button'
                name=''
                value='Login'
                onClick={this.onLogin}
              />
              <br />
            </div>
            <div className='col-md-9 register-right'>
              <div>
                <h3 className='register-heading'>สมัครสมาชิก</h3>
                <div className='row register-form p-5'>
                  <div className='col-md-6'>
                    <div className='form-group p-2'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='ชื่อ *'
                        value={firstname}
                        onChange={this.onFirstNameChange}
                      />
                    </div>
                    <div className='form-group'>
                      <div className='m-2'>
                        <label className='text-primary'>เพศ</label>
                        &nbsp;
                        <label className='radio inline ml-3'>
                          <input
                            type='radio'
                            name='gender'
                            value={sex}
                            onChange={this.onSexChange}
                            className='ml-3'
                          />
                          &nbsp;<span className='ml-3'>ชาย </span>
                        </label>
                        <label className='radio inline ml-3'>
                          &nbsp;
                          <input
                            type='radio'
                            name='gender'
                            value={sex}
                            onChange={this.onSexChange}
                            className='ml-3'
                          />
                          &nbsp;<span className='ml-2'>หญิง </span>
                        </label>
                      </div>
                    </div>
                    <div className='form-group p-2'>
                      <input
                        type='text'
                        minLength='5'
                        maxLength='10'
                        name='txtUserName'
                        className='form-control'
                        placeholder='UserName *'
                        value={username}
                        onChange={this.onUserNameChange}
                      />
                    </div>
                    <div className='form-group p-2'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='รหัสผ่าน *'
                        value={password}
                        onChange={this.onPWDChange}
                      />
                    </div>
                    <div className='form-group p-2'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='ยืนยัน รหัสผ่าน *'
                        value={repassword}
                        onChange={this.onRePWDChange}
                      />
                    </div>

                    <div className='form-group p-2'>
                      <input
                        type='file'
                        className='form-control'
                        placeholder='รูปถ่าย *'
                        value={picture}
                        onChange={this.onFileChange}
                      />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group p-2'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='นามสกุล *'
                        value={lastname}
                        onChange={this.onLastNameChange}
                      />
                    </div>

                    <div className='form-group p-2'>
                      <label className='text-primary mt-3'>
                        วัน-เดือน-ปี เกิด
                      </label>
                      <input
                        type='date'
                        className='form-control'
                        value={birthday}
                        onChange={this.onBirthdayChange}
                      />
                    </div>

                    <div className='form-group p-2'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='อีเมล์ *'
                        value={email}
                        onChange={this.onEmailChange}
                      />
                    </div>
                    <div className='form-group p-2'>
                      <input
                        type='text'
                        minLength='10'
                        maxLength='10'
                        name='txtEmpPhone'
                        className='form-control'
                        placeholder='เบอร์มือถือ *'
                        value={mobile}
                        onChange={this.onMobileChange}
                      />
                    </div>
                    <div className='form-group p-2'>
                      <select
                        className='form-control'
                        onChange={this.onQuestionChange}
                        select={question}
                      >
                        <option value='0'>คำถามส่วนตัว</option>

                        <option value='1'>วัน-เดือน-ปี เกิด dd/mm/yyyy?</option>
                        <option value='2'>ชอบสีอะไร?</option>
                        <option value='3'>สัตว์เลี้ยงคือ?</option>
                      </select>
                    </div>
                    <div className='form-group p-2'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='กรอกคำตอบ จากคำถามส่วนตัว *'
                        value={answers}
                        onChange={this.onAnswerChange}
                      />
                    </div>
                  </div>

                  <div className='container text-center p-0'>
                    <div className='row'>
                      <div className='col-md-9'>
                        <input
                          type='submit'
                          className='btn btn-secondary btnRegister'
                          value='ลงทะเบียน'
                        />
                        <input
                          type='reset'
                          className='btn btn-danger btnReset'
                          value='Reset'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default FormAdd;
