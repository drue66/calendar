import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../../../models/IUser";
import {LoginValues} from "../../../components/LoginForm";
import {RegistrationValues} from "../../../components/RegistrationForm";

export const loginRequest = createAsyncThunk<IUser | undefined, LoginValues>(
  'auth/login',
  async (values, thunkAPI) => {
    try {
      const {data} = await axios.get<IUser[]>(`http://localhost:5000/user?login=${values.login}&password=${values.password}`);

      if (data.length === 0) {
        return thunkAPI.rejectWithValue('Неверный логин или пароль');
      }

      const user = {
        id: data[0].id,
        login: data[0].login,
      };

      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify(user));

      return user;

    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const registrationRequest = createAsyncThunk<IUser | undefined, RegistrationValues>(
  'auth/registration',
  async (values, thunkAPI) => {
    try {
      const check = await axios.get<IUser[]>(`http://localhost:5000/user?login=${values.login}`);

      if (check.data.length > 0) {
        return thunkAPI.rejectWithValue('Пользователь с таким логином уже существует');
      }

      const { data } = await axios.post<IUser>('http://localhost:5000/user', values);

      const user: IUser = {
        id: data.id,
        login: data.login,
      };

      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify(user));

      return user;

    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logoutRequest = createAsyncThunk(
  'auth/logout',
  (arg, thunkAPI) => {
    try {
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
)
