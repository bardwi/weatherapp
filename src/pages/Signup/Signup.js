import React, {useState} from "react";
import bg from "../../assets/signup-image.webp";
import {Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";



const Signup = (props)=> {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatP, setRepeatP] = useState("");
    
    const handleSubmit = (evt) => {
        const data = {
            username: username,
            email: email,
            password:password,

          }
        evt.preventDefault();
        axios.post('https://sheet.best/api/sheets/1957b039-6829-4b62-a944-53569065d95c', data)
        .then(response => {
        //console.log(response);
       })
       toast.success('Form Submitted')
       //redirect();
    }

    /*const redirect = () => {
        props.history.push({
            pathname: '/'
        })
    }*/



    return(
        <div className="signup-page-container">
            <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}/>
            <div className="signup-page">
                <div className="page-wrapper">
                    <div className="signup-left-container"> 
                        <div className="form-wrapper-signup">
                            <h1>Sign up</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="signup-input-form">
                                    <i className="fa fa-user icon"></i>
                                    <input name="name" type="text" placeholder="Your Name" className="name" value={username} onChange={e=>setUsername(e.target.value)} required/>
                                    <span className="border-bottom-animation left"></span>
                                </div>
                                <div className="signup-input-form">
                                    <i className="fa fa-envelope icon"></i>
                                    <input name="email" type="email" placeholder="Your Email" className="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                                </div>

                                <div className="signup-input-form">
                                    <i className="fa fa-lock icon"></i>
                                    <input name="password" type="password" placeholder="Password" className="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                                </div>
                                <div className="signup-input-form">
                                    <i className="fa fa-lock icon-white stroke-transparent"></i>
                                    <input name="repeatpassword" type="password" placeholder="Repeat your password" className="passwordrepeat" value={repeatP} onChange={e=>setRepeatP(e.target.value)} required/>
                                </div>
                                <div className="signup-input-form checkbox-signup">
                                    <input name="acceptTerms" type="checkbox" id="acceptTerms" className="checkbox"/>
                                    <label htmlFor="acceptTerms" className="accept" > I agree all statements in Terms of service</label>

                                </div>

                                <div>
                                    <button type="submit" className="signup-btn">Register</button>
                                </div>

                            </form>
                        </div>

                     </div>
                    <div className="signup-right-container">
                        <div className="right-wrapper">
                            <div className="img-container"> 
                               <img src={bg} alt="background"/>
                            </div>
                            <div className="signin-link">
                               <Link to="/"> I am already member</Link>
                            </div>
                        </div>

                    

                   </div>
                </div>
            </div>

        </div>
    )
}

export default Signup;