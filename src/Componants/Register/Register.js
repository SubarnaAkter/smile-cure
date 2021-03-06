
import { useForm } from 'react-hook-form';

import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
    const { signInWithUsingGoogle, createNew,setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [error, setError] = useState('');
    const redirects_uri = location.state?.from || './Home';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { userName, email, password } = data;
      //  createNew(email, password);
        handleEmailpass(email, password)
       
    }

    const handleEmailpass=(email, password)=>{
        createNew(email, password)
        .then(()=>{
         history.push(redirects_uri);
        })
        .catch(error => {
         setError(error.message);
         console.log(error.message)
       })
       .finally(() => setIsLoading(false));
     


    }



    return (
        <div className="container m-5  mx-auto">

            <div  className="row container">
              
                <div className="col-12 col-md-6">
                    <h1 className="care-style">Please Register</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" className="w-75 my-2 p-2" placeholder="Enter your Name" {...register("userName")} /> <br />
                        <input type="email" className="w-75 my-2 p-2" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input type="password" className="w-75 my-2 p-2 " placeholder="Enter your Password" {...register("password", { required: true })} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span  className="text-danger pb-2 mb-3"></span>}
                          <p className="text-danger">{error}</p>

                          {/* ---------------------------- */}
                        <input className= "button-regular rounded w-75 fw-bold mb-3" type="submit" />
                    </form>
                    <p>Already registered?  <Link to="/Login">Login</Link></p>

                    <div>-------------or------------</div>
                    <button onClick={signInWithUsingGoogle} className="google-btn fs-5 mt-3"><i className="fab fa-google"></i>oogle Sign in</button>
                </div>

                <div className="col-12 col-md-6">
                    <img className="w-100" src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-woman-signing-login-to-account-smartphone-app-user-interface-secure-password-194944775.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;