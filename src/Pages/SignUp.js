import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import signup from '../Imgs/signup.png';
import { Link } from 'react-router-dom';
import "../Styling/signup.css"
import Button from 'react-bootstrap/Button';




function SignUp() {

    const [userData, setuserData] = useState({

        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const [errors, setErrors] = useState({
        usernameErr: null,
        emailErr: null,
        passwordErr: null,
        confirmpasswordErr: null

    })


    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };


    const changeData = (e) => {
        if (e.target.name === 'username') {
            setuserData({
                ...userData,
                username: e.target.value
            })
            setErrors({
                ...errors,
                usernameErr:
                    e.target.value.length === 0 ? 'يجب ادخال الاسم بالكامل' :
                        e.target.value.length < 3 ? 'يجب ان يكون اكثر من 3 احرف' : null
            })
        }

       

        if (e.target.name === 'password') {
            var regpassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})");

            setuserData({
                ...userData,
                password: e.target.value
            })

            setErrors({
                ...errors,
                passwordErr:
                    e.target.value.length === 0 ? "يجب ادخال الاسم بالكامل" :
                        !(regpassword.test(e.target.value)) ? "يجب ان يتكون من 8 احرف واحرف كبيره وصغيره ومميزه " : null
            })
        }

     


    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={signup}
                                        alt="login form" className="img-fluid" style={{ borderRadius: ' 1rem 0 0 1rem', height: "100%" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form action='/'>


                                            <h1 style={{ color: '#004B8F', textAlign: 'center' }}>تسجل الدخول</h1>
                                            <br></br>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" style={{textAlign:'right',display: 'block ', color: '#004B8F', fontSize: '25px'  }}>الاسم بالكامل</label>
                                                <input style={{ borderRadius: '15px',textAlign:'right' }}
                                                    type="text"
                                                    name='username'
                                                    className="form-control"
                                                    placeholder="اسمك بالكامل "
                                                    value={userData.username}
                                                    onChange={(e) => changeData(e)} 
                                                />
                                                <p className="text-danger"> {errors.usernameErr} </p>


                                            </div>



                                            <div className="form-outline mb-4">
                                                <label className="form-label" style={{ color: '#004B8F', fontSize: '25px', textAlign:'right',display: 'block '}}>الرقم السري</label>
                                                <input style={{ borderRadius: '15px' ,textAlign:'right'}}
                                                    type="password"
                                                    name='password'
                                                    className="form-control"
                                                    placeholder="الرقم السري" 
                                                    value={userData.password}
                                                    onChange={(e) => changeData(e)}/>
                                                    <p className="text-danger"> {errors.passwordErr} </p>
                                            </div>


                                            <div className="d-grid mb-2">
                                                <button style={{ fontSize: '20px' }}
                                                    type="submit"
                                                disabled={errors.usernameErr ||  errors.passwordErr }
                                                >
                                                    تسجيل الدخول
                                                </button>
                                            </div>

                                            {/* <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                      style="color: #393f81;">Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a> */}
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        // <body>
        //   <div classNameName="container">
        //     <div className="row">
        //       <div className="col-lg-10 col-xl-9 mx-auto">
        //         <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
        //           <div className="card-img-left d-none d-md-flex">
        //           </div>
        //           <div className="card-body p-4 p-sm-5">
        //             <h1 style={{color:'#004B8F' , textAlign:'center'}}>Sign Up For Free</h1>
        //             <br></br>
        //             <form>

        //               <div className="form-outline mb-4">
        //               <label className="form-label" htmlFor="form2Example17" style={{color :'#004B8F' , fontSize:'25px'}}>User Name</label>
        //             <input style={{borderRadius:'15px'}}
        //                 type="text" 
        //                 className="form-control" 
        //                 placeholder="Your UserName " 

        //             />

        //               </div>

        //               <div className="form-outline mb-4">
        //               <label className="form-label" htmlFor="form2Example17" style={{color :'#004B8F' , fontSize:'25px'}}>Your Email</label>
        //             <input style={{borderRadius:'15px'}}
        //                 type="email" 
        //                 className="form-control"  
        //                 placeholder="name@example.com"/>
        //               </div>


        //               <div className="form-outline mb-4">
        //               <label className="form-label" htmlFor="form2Example17" style={{color :'#004B8F' , fontSize:'25px'}}>Password</label>
        //             <input style={{borderRadius:'15px'}}
        //                 type="password" 
        //                 className="form-control"  
        //                 placeholder="Password"/>
        //               </div>

        //               <div className="form-outline mb-4">
        //               <label className="form-label" htmlFor="form2Example17" style={{color :'#004B8F' , fontSize:'25px'}}>Confirm Password</label>
        //             <input style={{borderRadius:'15px'}}
        //                 type="password" 
        //                 className="form-control"  
        //                 placeholder="Confirm Password"/>
        //               </div>

        //               <div className="d-grid mb-2">
        //               <button style={{fontSize: '20px'}}
        //                             type="submit"
        //                             // disabled={errors.usernameErr || errors.emailErr || errors.passwordErr || errors.confirmpasswordErr}
        //                             >
        //                             Sign Up
        //                         </button>
        //                         </div>

        //               {/* <a className="d-block text-center mt-2 small" href="#">Have an account? Sign In</a> */}






        //             </form>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </body>





    );
}
export default SignUp