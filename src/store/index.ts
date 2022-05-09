import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {userApi} from "../services/user";
import authReducer from "./reducers/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(userApi.middleware)
  ),
});

setupListeners(store.dispatch);

export default store;
