import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import WrongEmailMsg from "./dashboard/WrongErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";
import { showUsernameSliceActions } from "../../store/users/usernameShowSide";

const Login = () => {
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  const linkRef = useRef();
  let [wrongMsg, updateMsg] = useState(false);
  let usernameVal = useRef();
  let passwordVal = useRef();
  let getLoginFormVal = (e) => {
    e.preventDefault();
    let username = usernameVal.current.value;
    let password = passwordVal.current.value;
    users.map((user) => {
      if (username == user.userName && password == user.password) {
        dispatch(showUsernameSliceActions.showUsername(user.userName));
        linkRef.current.click();
        usernameVal.current.value = "";
        passwordVal.current.value = "";
      } else {
        updateMsg(true);
        usernameVal.current.value = "";
        passwordVal.current.value = "";
        setTimeout(() => {
          updateMsg(false);
        }, 4000);
      }
    });
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-body">
      {wrongMsg == true && <WrongEmailMsg />}

      <form className="mx-auto bg-white login-form" onSubmit={getLoginFormVal}>
        <Link className="navbar-brand login-logo" to="/">
          <img src="/images/logo/pngwing.com (6).png" />
        </Link>
        <Link to="/admin/dashboard" ref={linkRef} style={{ display: "none" }} />
        <div className="mb-3">
          <TextField
            size="small"
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            inputRef={usernameVal}
          />
        </div>
        <div className="mb-3">
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel size="small" htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              size="small"
              inputRef={passwordVal}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <center>
          <p style={{ color: "red" }}>{wrongMsg}</p>
        </center>
        <button
          type="submit"
          className="btn btn-primary login-btn"
          name="login"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
