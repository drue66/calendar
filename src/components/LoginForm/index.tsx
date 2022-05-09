import React, {FC, useEffect} from 'react';
import styles from "./LoginForm.module.scss";
import {Alert, Button, Form, Input, Space} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import rules from "../../utils/rules";
import {RouteNames} from "../../router";
import {useNavigate} from 'react-router-dom';

enum Fields {
  LOGIN = 'login',
  PASSWORD = 'password',
}

type FormResult = Record<Fields, string>;

export type LoginValues = FormResult;

interface Props {
  error: string;
  onSubmit: (values: FormResult) => void;
  onErrorClear: () => void;
}

const LoginForm: FC<Props> = (props) => {
  const { onSubmit, onErrorClear, error } = props;
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      onErrorClear();
    }
  }, []);

  const handleSubmit = (values: FormResult) => {
    onSubmit(values);
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
          name={Fields.LOGIN}
          rules={[rules.required()]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
          />
        </Form.Item>
        <Form.Item
          name={Fields.PASSWORD}
          rules={[rules.required()]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
          Или <Button onClick={() => navigate(RouteNames.REGISTRATION)} type={'link'} className={styles.register}>зарегистрироваться</Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default LoginForm;
