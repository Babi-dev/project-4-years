import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "@material-ui/core";

import {
  LoginContent,
  BackContent,
  Title,
  Salutation,
  InfoLogin
} from "./style/customLogin";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(2)
  },
  textField: {
    width: 280
  }
}));

function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <LoginContent className={classes.root}>
        <Title>Login</Title>

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <TextField
            label="Email"
            color="secondary"
            variant="outlined"
            onChange={e => {
              setValues({ ...values, email: e.target.value });
            }}
          />
        </FormControl>

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password" color="secondary">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            color="secondary"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button
          size="large"
          className={clsx(classes.withoutLabel, classes.textField)}
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </LoginContent>

      <BackContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "320px"
          }}
        >
          <Salutation>O Sapo Não Lava O Pé (O Sapo)</Salutation>
          <InfoLogin>O sapo não lava o pé</InfoLogin>
          <InfoLogin>Não lava porque não quer</InfoLogin>
          <InfoLogin>Ele mora lá na lagoa</InfoLogin>
          <InfoLogin>Não lava o pé porque não quer</InfoLogin>
        </div>
      </BackContent>
    </>
  );
}

export default Login;
