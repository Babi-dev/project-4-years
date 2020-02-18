import React from "react";

import GlobalStyle from "./styles/global";
import { Container } from "./styles/styles";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Container>
      <Login />
      <GlobalStyle />
    </Container>
  );
}

export default App;
