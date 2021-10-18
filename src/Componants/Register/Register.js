import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInWithUsingGoogle , createNew } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { userName, email, password } = data;
        createNew( email, password, userName);
    }

    

    return (
        <div className="container m-5 w-50 mx-auto">

            <h1>Please Register</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Enter your Name" {...register("userName")} />
                <input placeholder="Enter your Email" {...register("email", { required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="Enter your Password" {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}

                <input type="submit" />
            </form>
            <p>Already registered?  <Link to="/Login">Login</Link></p>

            <div>------------or-----------</div>
            <button onClick={signInWithUsingGoogle }>Google Sign in</button>
        </div>
    );
};

export default Register;