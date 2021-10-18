import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { signInWithUsingGoogle , processLogin } = useAuth();

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
     const   {email,password}=data;
        processLogin(email,password);
    }

    

    return (
        <div className="container m-5 w-50 mx-auto">

            <h1>Please Login</h1>
           
            <form onSubmit={handleSubmit(onSubmit)}>
     
      
      <input placeholder="Enter your Email" {...register("email", { required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  placeholder="Enter your Password" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email&& <span>This field is required</span>}
      
      <input type="submit" />
    </form>
            <p>New to Smile Cure?  <Link to="/Register">Create an account</Link></p>

            <div>------------or-----------</div>
            <button onClick={signInWithUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;