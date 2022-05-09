import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import RegistrationForm from "../../components/RegistrationForm";
import {registrationRequest} from "../../store/reducers/auth/actionCreators";
import {authActions} from "../../store/reducers/auth/authSlice";
import SignLayout from '../../layouts/Sign.layout';
import {Row, Typography} from "antd";

const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const { clearError } = authActions;
  const { error } = useAppSelector((state) => state.auth);

  const handleErrorClear = () => dispatch(clearError());

  return (
    <SignLayout>
      <Row justify={'center'}>
        <Typography.Title level={2}>Регистрация</Typography.Title>
      </Row>
      <RegistrationForm
        error={error}
        onSubmit={(values) => dispatch(registrationRequest(values))}
        onErrorClear={handleErrorClear}
      />
    </SignLayout>
  );
};

export default RegistrationPage;
