import {Alert, Button, Form, Input, Space} from 'antd';
import React, {FC, useEffect} from 'react';
import rules from '../../utils/rules';
import {RouteNames} from "../../router";
import styles from "./RegistrationForm.module.scss";
import {useNavigate} from "react-router-dom";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

enum Field {
  LOGIN = 'login',
  PASSWORD = 'password',
  CONFIRM_PASS = 'confirm',
}

type FormResult = Record<Field, string>;

export type RegistrationValues = Omit<FormResult, Field.CONFIRM_PASS>;

interface Props {
  error: string;
  onSubmit: (values: RegistrationValues) => void;
  onErrorClear: () => void;
}

const RegistrationForm: FC<Props> = (props) => {
  const { onSubmit, onErrorClear, error } = props;
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      onErrorClear();
    }
  }, []);

  const handleSubmit = (values: FormResult) => {
    onSubmit({
      [Field.LOGIN]: values[Field.LOGIN],
      [Field.PASSWORD]: values[Field.PASSWORD],
    });
  };

  return (
    <Space direction={'vertical'} className={styles.form} size={[20, 20]}>
      {error ? (
        <Alert
          message={error}
          type="error"
          closable
          onClose={onErrorClear}
        />
      ) : null}
      <Form onFinish={handleSubmit}>
        <Form.Item
          name={Field.LOGIN}
          rules={[rules.required()]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
          />
        </Form.Item>

        <Form.Item
          name={Field.PASSWORD}
          rules={[rules.required()]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item
          name={Field.CONFIRM_PASS}
          dependencies={['password']}
          hasFeedback
          rules={[rules.required(), rules.confirmPass()]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Подтверждение пароля"
          />

        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
          Или <Button onClick={() => navigate(RouteNames.LOGIN)} type={'link'} className={styles.login}>войти</Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default RegistrationForm;
