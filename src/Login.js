import "./index.css";
import styled from "styled-components";
import { AccountBox } from "./Components/AccountBox";
import React from "react";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
  <AppContainer>
      <AccountBox />
  </AppContainer>
  );
}

export default Login;