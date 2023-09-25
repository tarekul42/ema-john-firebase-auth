import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)

    const handleSingUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword);

        setError('')
        if(password !== confirmPassword){
            setError('Your password did not match')
            return;
        }
        else if(password.length < 6){
            setError('password must be 6 characters or longer')
            return;
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            setError(error.messsage);
            console.log(error);
        })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSingUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="password" name="confirm" id="confirmPassword" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p><small>Already have an account? <Link to='/login'> Login</Link> </small></p>
            </form>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;