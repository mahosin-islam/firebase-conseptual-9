import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.init";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [err, setErr] = useState("");
  const [eye, setEye] = useState(false);
  const handerGoogle = (e) => {
    e.preventDefault();

    setErr("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return toast("password will be more 6 caregtors");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((resul) => {
        console.log(resul.user);
        toast("you are successfull ");
        // e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  };

  return (
    <div>
      <div className="hero bg-purple-500 px-10 min-h-screen">
        <div className="hero-content flex-col sm:flex-row justify-between">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl  text-white font-bold">Crat your accout</h1>
            <p className="py-6 text-gray-300">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-purple-400 w-full max-w-sm shrink-0 shadow-lg">
            <div className="card-body">
              <fieldset className="fieldset">
                <form onSubmit={handerGoogle}>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={eye ? "password" : "text"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <span
                      onClick={() => setEye(!eye)}
                      className="text-2xl absolute text-black right-7 mt-2"
                    >
                      {eye ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral w-full mt-1">
                    Sign up
                  </button>

                 
                  <small>
                    {err ? toast("your email already axisted") : ""}
                  </small>
                  <p className="mt-2">
                    Already have Signup? mahosin{" "}
                    <Link className="text-blue-600" to="/LogIn">
                      logIn
                    </Link>
                  </p>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
