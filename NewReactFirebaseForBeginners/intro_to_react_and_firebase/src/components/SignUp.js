import React, {useState} from 'react'
import PageHeader from './PageHeader'

import {useNavigate, Link} from "react-router-dom";
import {auth} from '../firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = (props) => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)

    const onSignUp = () => {
        console.log('sign up');
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setEmail((email) => '')
                setPassword((password) =>'')
                navigate("/posts")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

        setEmail('')
        setPassword('')

    }

    return (
    <div>
        <section className='box'>
            <PageHeader title="Sign Up"></PageHeader>
        </section>
        <div className='column is-half is-offset-one-quarter'>
            <div className='box has-background-grey-lighter'>

                <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                        <input value={email} onChange={onEmailChange} className='input' type="email" placeholder="Email" ></input>
                    </div>  
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <div className='control'>
                        <input value={password} onChange={onPasswordChange} className='input' type="password" placeholder="Password" ></input>
                    </div>  
                </div>
                    <Link to="/signin" className="mx-3">
                        Already have an account, Sign In
                    </Link>
                    <button className="button is-primary is-medium mx-3" onClick={onSignUp}>Sign Up</button>
                
            </div>
        </div>
    </div>
    )
}

export default SignUp