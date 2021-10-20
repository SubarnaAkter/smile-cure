import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithUsingGoogle, processLogin} = useAuth();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirects_uri = location.state?.from || './Home';

    const handleSignInWithGoogle = () => {
        signInWithUsingGoogle()
            .then(() => {
                history.push(redirects_uri);
            })
    }
    const handleLoginWithEmailPass=(email, password)=>{
        processLogin(email, password)
       .then(()=>{
        history.push(redirects_uri);
       })
       .catch(error => {
        setError(error.message);
        console.log(error.message)
      })
    }

    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        processLogin(email, password);
        handleLoginWithEmailPass(email, password)
    }



    return (
        <div className="container m-5   mx-auto">

         

            <div className="row container">
                <div className="col-12 col-md-6">
                    <img className="w-75" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg" alt="" />
                </div>
                <div className="col-12 col-md-6 mt-5 mx-auto"> 
                <h1 className="care-style">Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="login">


                        <input type="email" className="w-75 my-2 p-2" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input type="password" className="w-75 my-2 p-2"  placeholder="Enter your Password" {...register("password", { required: true })} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="text-danger pb-2 mb-3">This field is required</span>} <br />

                        <input  className= "button-regular rounded w-75 fw-bold mb-3" type="submit"  /><br />
                    </form>
                    <p>New to Smile Cure?  <Link to="/Register">Create an account</Link></p>

                    <div>-------------or------------</div>
                    <button className="google-btn fs-5 mt-3" onClick={handleSignInWithGoogle}><i className="fab fa-google"></i>oogle Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;