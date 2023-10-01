import React, {useRef} from 'react'
import { 
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
  EuiFlexItem,
  EuiFlexGroup,
  EuiPanel,
  EuiTitle,
  EuiText, EuiTextAlign} from '@elastic/eui'

import { auth } from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
  const signUp = e => {
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    e.preventDefault()
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
          console.log(userCredential)
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
      });
  }

  const signIn = e => {
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    e.preventDefault()
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
          console.log(userCredential)
          console.log('sing in')
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
      });
  }

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={4}></EuiFlexItem>

      <EuiFlexItem grow={4}>
        <EuiPanel>
          <EuiText>
            <EuiTextAlign textAlign="center">
              <h2 key={0}>Signin</h2>
            </EuiTextAlign>
          </EuiText>
          <EuiFieldText placeholder="Email" inputRef={emailRef}/>
          <EuiFieldPassword placeholder="Password" type="dual" inputRef={passwordRef}/>
          <EuiButton onClick={signIn}>Sign in</EuiButton>
          <EuiText>
            <EuiTextAlign textAlign="center">
              <h6 key={0}>Not yet register? <span onClick={signUp}>Sign up</span></h6>
            </EuiTextAlign>
          </EuiText>
        </EuiPanel>
      </EuiFlexItem>

      <EuiFlexItem grow={4}></EuiFlexItem>
    </EuiFlexGroup>
  )
}

export default Signin