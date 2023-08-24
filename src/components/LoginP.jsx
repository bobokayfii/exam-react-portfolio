import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendData } from "../server/common";
import { TOKEN, USER } from "../const";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROLE } from "../utils";
import { Link } from "react-router-dom";

const LoginP = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    setDisable(true);
    sendData("auth/login", value)
      .then((res) => {
        console.log(res);
        localStorage.setItem(TOKEN, res.data.token);
        localStorage.setItem(ROLE, res.data.user.role);
        localStorage.setItem(USER, JSON.stringify(res.data.user));

        console.log(res.data.user);

        if (res.data.user.role === "user") {
          window.location.href = "/";
          toast.success("Hush kelibsiz!.");
        } else if (res.data.user.role === "client") {
          window.location.href = "/dashboard";
          toast.success("Hush kelibsiz!");
        }else{
          window.location.href = "/login";
          toast.error("Admin Page tayyor emas!");
        }
      })
      .catch((err) => {
        toast.error("Username or password incorrect!");
      });
  };
  return (
    <div id="registerpage">
      <div className="register container">
        <Link style={{paddingBottom:"30px"}} to="/register" className="nav-link">
          <span className="registerbtn">Register</span>
        </Link>
        <form className="form">
          <h1>Login</h1>
          <div className="txtField">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: "Please enter username !" })}
              type="text"
              placeholder="Username"
            />
            <span>{errors.userName?.message}</span>
          </div>
          <div className="txtField">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "Please enter password !" })}
              type="password"
              placeholder="Password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            className={disable ? "disabledTrue" : "disabledFalse"}
            disabled={disable}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginP;
