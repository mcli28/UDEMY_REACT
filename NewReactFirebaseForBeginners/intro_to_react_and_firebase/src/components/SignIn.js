import React, {useState} from 'react'
import PageHeader from './PageHeader'
import {auth} from '../firebase'
import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Posts from './Posts';

const SignIn = (props) => {

    let navigate = useNavigate()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    const onSignIn = () => {
      //props.signIn(email, password)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userC = userCredential.user;
          console.log("user signed in")
          console.log(userC)
          window.localStorage.setItem('useruid', userC.uid)
          window.localStorage.setItem('user', userC)
          //setUser(userC)
          navigate("/posts")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
      
        setEmail('')
        setPassword('')
    }
    if (props.user != null) {
      console.log("estoy logueado")
      navigate("/posts")
    }

  return (
    <div>
        <section className='box'>
            <PageHeader title="Sign In"></PageHeader>
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
                <a href="#" className='mx-3'>Don't have an account, Sign Up</a>
                <button className="button is-primary is-medium mx-3" onClick={onSignIn}>Sign In</button>
                
            </div>
        </div>
    </div>
  )
}

export default SignIn