import React from 'react';
import '../Login/Login.css'


const Page = () => {
  return (
    <>

      <header className="App-header">


        <br /><br /><br /><br /><br />
        <h1 className='login-header'>LOGIN PAGE</h1>

        <br /><br />
        <div className="box1">
          <span className="borderLine"></span>
          <form action="">
            <h2>Sign in</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="#">Signup</a>
            </div>
            <input type="submit" id="submit" value="Login" />
          </form>
        </div>




      </header>
    </>
  )
}

export default Page






