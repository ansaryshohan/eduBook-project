import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const Register = () => {
  const { createUserWithEmailPassword, updateProfileInfo, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    photoUrl: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
    overall: ""
  })

  const handleName = (e) => {
    const name = e.target.value;
    setUserInfo({ ...userInfo, fullName: name })
  }
  const handlePhotUrl = (e) => {
    const photo = e.target.value;
    setUserInfo({ ...userInfo, photoUrl: photo })
  }

  // email error handling here..
  const handleEmail = (e) => {
    const email = e.target.value;
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError({ ...error, emailError: "please provide a valid email" })
      setUserInfo({ ...userInfo, email: "" })
    } else {
      setError({ ...error, emailError: "" })
      setUserInfo({ ...userInfo, email: email })
    }
  }

  // handlings password error here...
  const handlePassword = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setError({ ...error, passwordError: "password should be of 6 character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else if (!/[A-Z]/.test(password)) {
      setError({ ...error, passwordError: "password should have a Capital Letter" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else if (!/[^A-Za-z0-9]/.test(password)) {
      setError({ ...error, passwordError: "password should have a special character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else {
      setError({ ...error, passwordError: "" })
      setUserInfo({ ...userInfo, password: password })
    }
  }

  // console.log( userInfo);

  // the form submit handle function..

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    createUserWithEmailPassword(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        if (user.uid) {
          // updateing profile name and photourl
          updateProfileInfo(userInfo.fullName, userInfo.photoUrl)
            .then(() => { })
            .catch(error => { console.error(error) })

          if (user.email) {
            verifyEmail()
              .then(() => {
                 toast.success("Email verification code send to your email.");
                 navigate('/login')
              })
              .catch(err => console.error(err))
          }

        }
        form.reset()
        // console.log(user);
      })

      .catch(err => {
        toast.error(`${err}`)
      })

  }
  // console.log(userInfo);

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="flex flex-col items-center gap-7 lg:flex">
        <div className="text-center lg:text-left  mt-14 text-accent">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleOnSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Full Name</span>
              </label>
              {/* this is the name field */}
              <input
                type="text"
                name='full-name'
                onChange={handleName}
                placeholder="full name"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">PhotoURL</span>
              </label>
              <input
                type="text"
                name='photUrl'
                onChange={handlePhotUrl}
                placeholder="your photo url here"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Email</span>
              </label>
              <input
                type="email"
                name='email'
                onChange={handleEmail}
                placeholder="email"
                className="input input-bordered"
                required />
              {error.emailError && <p className='text-red-600'>{error.emailError}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Password</span>
              </label>

              <input
                type="password"
                name='password'
                onChange={handlePassword}
                placeholder="password"
                className="input input-bordered"
                required />

              {!error.passwordError ? <></> : <p className='text-red-600'>{error.passwordError}</p>}

            </div>
            <div className="form-control mt-3">
              <button className="btn btn-accent text-xl font-bold">
                SIGN UP
              </button>
            </div>
            <p>
              <small>Already have an account?
                <Link
                  to="/login"
                  className="link-success uppercase link-hover"
                > login</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;