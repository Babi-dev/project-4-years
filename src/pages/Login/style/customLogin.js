import styled from "styled-components";

export const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-color: #fff;
  height: 100%;
  width: 35%;
`;

export const BackContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;

  height: 100%;
  width: 65%;

  background-image: linear-gradient(
    to bottom right,
    #ff9014,
    #e86413,
    #ff5722,
    #e82513,
    #ff1443
  );
  color: #fff;
`;

export const Title = styled.span`
  font-size: 34px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  color: #ff1443;
  margin-bottom: 20px;
`;

export const Salutation = styled.span`
  margin-bottom: 20px;
  font-size: 34px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
`;

export const InfoLogin = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  text-align: left;
`;
