import { Rule } from "antd/lib/form";

const rules = {
  required: (message: string = 'Поле не заполнено'): Rule => ({
    required: true, message,
  }),
  email: (message: string = 'Некорректный e-mail'): Rule => ({
    type: 'email', message,
  }),
  confirmPass: (passFieldName: string = 'password'): Rule => (
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue(passFieldName) === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Пароли не совпадают'));
      },
    })
  ),
};

export default rules;
