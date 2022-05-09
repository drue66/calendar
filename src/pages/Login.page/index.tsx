import React from 'react';
import LoginForm from "../../components/LoginForm";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loginRequest} from "../../store/reducers/auth/actionCreators";
import SignLayout from "../../layouts/Sign.layout";
import {authActions} from "../../store/reducers/auth/authSlice";
import {Row, Typography} from "antd";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { clearError } = authActions;
  const { error } = useAppSelector((state) => state.auth);

  const handleErrorClear = () => dispatch(clearError());

  return (
    <SignLayout>
      <Row justify={'center'}>
        <Typography.Title level={2}>Вход</Typography.Title>
      </Row>
      <LoginForm
        error={error}
        onSubmit={(values) => dispatch(loginRequest(values))}
        onErrorClear={handleErrorClear}
      />
    </SignLayout>
  );
};

export default LoginPage;
