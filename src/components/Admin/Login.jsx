import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import WrongEmailMsg from './dashboard/WrongErrorMsg';

const Login = () => {
  const linkRef = useRef();
  let [wrongMsg, updateMsg] = useState(false);
  let usernameVal = useRef();
  let passwordVal = useRef();
  let getLoginFormVal = (e)=>{
    e.preventDefault();
    let loginUser = 'Humair';
    let loginPassword = '12345'
    let username = usernameVal.current.value;
    let password = passwordVal.current.value;
    if(username == loginUser && password == loginPassword){
      linkRef.current.click();
      usernameVal.current.value = '';
      passwordVal.current.value = '';
    }else{
      updateMsg(true);
      usernameVal.current.value = '';
      passwordVal.current.value = '';
      setTimeout(()=>{
        updateMsg(false);
      },4000)
    }
  }
  return (
   
    <div className="login-body">
      {wrongMsg == true && <WrongEmailMsg/>}
       
    <form className="mx-auto bg-white login-form" onSubmit={getLoginFormVal}>
    <Link className="navbar-brand login-logo" to="/">
                <img src="/images/logo/pngwing.com (6).png" />
            </Link>
            <Link to='/admin/dashboard' ref={linkRef} style={{ display: 'none' }} />
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User name</label>
    <input ref={usernameVal} type="text" className="form-control" onblur="validateName()" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordVal} type="password" className="form-control"  id="exampleInputPassword1" name="password" required/>
    
  </div>
    <center><p style={{color: 'red'}}>{wrongMsg}</p></center>
  <button type="submit" className="btn btn-primary login-btn" name="login">Login</button>
  
</form>

    </div>
    
  
  )
}

export default Login
