import React from 'react'
import "./Login.css"
import Button from '@mui/material/Button'
function Login() {
    const signIn = () => {
        // sign in
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img
                src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"alt=""
            />
           <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" 
            />
        </div>

        <Button type='submit' onClick={signIn} >
            Sing In
        </Button>
    </div>
  )
}

export default Login