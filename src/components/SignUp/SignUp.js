import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useLocation } from "react-router-dom";
import "./SignUp.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BiHide, BiShow } from "react-icons/bi"; // Import eye icons from React Icons

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State variable to toggle password visibility

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/signIn");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main>
      <section className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
          <img src="/Rectangle 4777.png" alt="Signup Image" className="img-fluid mobile-image" />
          </div>

          <div className="col-lg-5 col-sm-12 left-con ">
            <h2 className="fw-bold">Get's Started.</h2>
     <p className="mt-2">Have an account?  <NavLink to="/signIn">Sign in</NavLink></p>
            <form> <i className="bi bi-google me-2"></i> 
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <button className="btn-google mb-2 w-100">
                  <img src="/google.svg" alt="google Image" className="img-google" />SignIn With Google
                  </button>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <button className="mb-2 w-100 btn-facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path></svg>
                  SignIn With Facebook
                  </button>
                </div>
                <div className="or">
                    <div className="rectangle" />
                    <div className="text-wrapper">or</div>
                    <div className="rectangle" />
                    </div>
               
                <div className="input-container">
                <div className="col-12 mb-3">
                <label className="label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-12 mb-3">
                <label className="label">Last Name</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-12 mb-3">
                <label className="label">Email</label>

                  <input
                    type="email"
                    className="form-control"
                    id="email-address"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                </div>
                <div className="col-12 mb-3">
                <label className="label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <BiHide /> : <BiShow />} {/* Eye icon */}
                  </button>
                </div>
              </div>
                <div className="col-12 mb-3">
                <label className="label">Company</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                </div>

                <div className="col-12 mb-3 mt-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                  </div>
                  
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onSubmit}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <button className="eng-btn english-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
            <path id="Vector" d="M10.5 21L15.75 9.75L21 21M12 18H19.5M3 5.621C4.9904 5.37332 6.99425 5.24941 9 5.25M9 5.25C10.12 5.25 11.233 5.288 12.334 5.364M9 5.25V3M12.334 5.364C11.176 10.658 7.69 15.08 3 17.502M12.334 5.364C13.23 5.425 14.119 5.511 15 5.621M10.411 14.116C8.77097 12.4486 7.47113 10.478 6.584 8.314" stroke="#242731" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            I English</button>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
