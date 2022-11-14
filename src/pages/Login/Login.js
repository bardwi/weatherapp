import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import bg from "../../assets/signin-image.webp";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Login.css";



const Login = (props)=> {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]) ;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        const userExists = data.some((user => user.username === username)&&(user => user.password === password));
        if(userExists) {
            sessionStorage.setItem("username",username);
            props.history.push({
                pathname: '/home'
            })
        }
         else {
             toast.error('invalid login')
         }

        }

    useEffect(()=> {
        axios.get('https://sheet.best/api/sheets/1957b039-6829-4b62-a944-53569065d95c')
        .then((response)=>{
            setData(response.data)
        })
    },[])

    return(
        <div className="login-page-container">
            <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}/>
            <div className="login-page">
                <div className="page-wrapper"> 
                    <div className="left-container">
                        <div className="left-wrapper">
                            <div className="img-container"> 
                                <img src={bg} alt="background"/>
                            </div>
                    
                            <div className="signup-link">
                                <Link to="/signup"> Create an account</Link>
                            </div>
                        </div>
                    </div>
               
                   

                    <div className="right-container"> 
                        <div className="form-wrapper">
                           <h1>Sign in</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="login-input-form">
                                    <i className="fa fa-user icon"></i>
                                    <input name="name" type="text" placeholder="Your Name" id="username" className="name" value={username} onChange={e=>setUsername(e.target.value)} required/>
                                    <span className="border-bottom-animation left"></span>
                                </div>
                                <div className="login-input-form">
                                    <i className="fa fa-lock icon"></i>
                                    <input name="password" type="password" placeholder="Password" id="password" className="password"  value={password} onChange={e=>setPassword(e.target.value)} required/>
                                </div>

                        
                                <div className="login-input-form checkbox-form">
                                    <input name="rememberme" type="checkbox" id="rememberme" className="checkbox"/>
                                    <label htmlFor="rememberme" className="rememberme"> Remember me</label>
                                </div>

                                <div>
                                    <button type="submit" className="login-btn">Log in</button>
                                </div>

                            </form>

                            <div className="social-media-login">
                                <div className="alt-login-text">
                                    <p>Or login with</p>
                                </div>
                                <div className="facebook-icon">
                                    <img src={facebook} alt="facebook"/>
                                </div>

                                <div className="twitter-icon">
                                    <img src={twitter} alt="twitter"/>
                                </div>

                                <div className="google-icon">
                                    <img src={google} alt="google"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
               
            </div>

        </div>
    )
   
}



export default Login;