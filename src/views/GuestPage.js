import React, { useContext, useState } from "react";
import { FontSizeContext } from "../providers/FontProvider";
import {
  StyledForm,
  StyledInput,
  Wrapper,
  FullPage,
} from "./GuestPage.style.js";

const GuestPage = () => {
  const [login, setLogin] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState("");
  const { handleLogin } = useContext(FontSizeContext);
  const handleUsernameChange = (event) => {
    setLogin(event.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault(); //block reload page

    if (login === "admin" && password === "admin") {
      handleLogin();
    } else {
      setError("Wrong login or password");
    }
  };
  return (
    <FullPage>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Logo"
            style={{marginBottom: 20}}
          />
          <label htmlFor="login">Login</label>
          <StyledInput
            name="login"
            id="login"
            value={login}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password" style={{ marginTop: "5px" }}>
            Password
          </label>
          <StyledInput
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" style={{ borderRadius: "30px" }}>
            Sign in
          </button>
        </StyledForm>
        {error}
      </Wrapper>
    </FullPage>
  );
};

export default GuestPage;
