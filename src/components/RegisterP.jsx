import React from "react";
import { useForm } from "react-hook-form";
import { sendData } from "../server/common";
import { TOKEN, USER } from "../const";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";
const RegisterP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    sendData("auth/register", value)
      .then((res) => {
        localStorage.setItem(TOKEN, res.data.token);
        localStorage.setItem(USER, JSON.stringify(res.data.user));
        toast.success("Welcome! You have successfully registered.");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error registering user.");
      });
  };

  return (
    <div id="registerpage">
      <div className="register container">
        <Link
          style={{ paddingBottom: "30px" }}
          to="/login"
          className="nav-link"
        >
          <span className="registerbtn">Login</span>
        </Link>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Register</h1>
          <div className="inputs">
            <div className="textField">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", {
                  required: "Please enter first name!",
                })}
                type="text"
                placeholder="First Name"
              />
              <span>{errors.firstName?.message}</span>
            </div>
            <div className="textField">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {
                  required: "Please enter last name!",
                })}
                type="text"
                placeholder="Last Name"
              />
              <span>{errors.lastName?.message}</span>
            </div>
          </div>
          <div className="txtField">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", {
                required: "Please enter username!",
              })}
              type="text"
              placeholder="Username"
            />
            <span>{errors.username?.message}</span>
          </div>

          <div className="txtField">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "Please enter password!" })}
              type="password"
              placeholder="Password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterP;
