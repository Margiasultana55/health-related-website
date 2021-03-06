
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './Signup.css';
import useAuth from '../../hook/useAuth';




const Signup = () => {

    const { handleEmail, handlePass, signInUsingEmail, error, toggleLogin, isLogin, signInUsingGoole, } = useAuth();
    return (
        <div>
            <h1 className='text-center text mt-5 mb-5'> Please {isLogin ? 'Login' : 'Signup'}</h1>
            <form onSubmit={signInUsingEmail} className='container w-50'>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePass} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Already Register?</label>
                </div>
                <div className="mb-3 text-danger">
                    {error}

                </div>
                <button type="submit" className="btn btn-primary mb-5"> {isLogin ? 'Login' : 'Signup'}</button>


            </form>
            <div className='text-center mt-4 mb-5'>
                <h5 className='text '>Signin with</h5>
                <button onClick={signInUsingGoole} className='mt-2 my-btn'><FaGoogle size='25px' /></button>

            </div>

        </div>
    );
};

export default Signup;