import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Typography,
  Stack,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { FormProvider, FCheckBox, FTextField } from "../components/form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const LoginPage = () => {
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().min(8, "password is too short").required(),
  });
  const defaultValues = {
    username: "binhnguyen",
    password: "binh1234",
  };
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    reset,
    control,
    handleSubmit,
    formState: { error, isSubmitting },
    setError,
  } = methods;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const auth = useAuth();
  console.log("auth", auth);
  const onSubmit = async (data) => {
    let username = data.username;
    auth.signin(username, () => {
      // navigate(from, { replace: true });
      navigate(from, { replace: true });
    });
    setError("afterSubmit", { message: "Server Response Error" });
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Typography variant="h3" textAlign="center" mb={3}>
        Login
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {error && !!error.afterSubmit && (
            <Alert severity="error">{error.afterSubmit.message}</Alert>
          )}

          <FTextField name="username" label="Username" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FCheckBox name="remember" label="Remember me" />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
