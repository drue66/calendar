import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/IUser";
import {loginRequest, logoutRequest, registrationRequest} from "./actionCreators";

export interface AuthSlice {
  isInit: boolean,
  isAuth: boolean,
  isLoading: boolean,
  error: string,
  user: IUser,
}

const initialState: AuthSlice = {
  isInit: false,
  isAuth: false,
  isLoading: false,
  error: '',
  user: {
    login: '',
    id: -1,
  }
};

const login = (state: AuthSlice, action: PayloadAction<IUser>) => {
  state.isInit = true;
  state.isAuth = true;
  state.error = '';
  state.isLoading = false;
  state.user = action.payload;
};

const reject = (state: AuthSlice, action: PayloadAction<string>) => {
  state.isInit = true;
  state.error = action.payload;
  state.isLoading = false;
};

const pending = (state: AuthSlice) => {
  state.isLoading = true;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login,
    init: (state) => {
      state.isInit = true;
    },
    clearError: (state) => {
      state.error = initialState.error;
    }
  },
  extraReducers: {
    [loginRequest.fulfilled.type]: login,
    [loginRequest.pending.type]: pending,
    [loginRequest.rejected.type]: reject,
    [registrationRequest.fulfilled.type]: login,
    [registrationRequest.pending.type]: pending,
    [registrationRequest.rejected.type]: reject,
    [logoutRequest.fulfilled.type]: (state) => {
      state.isInit = true;
      state.isAuth = false;
      state.user = initialState.user;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
