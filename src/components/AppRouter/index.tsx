import {privateRoutes, publicRoutes} from '../../router';
import {useRoutes} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authActions} from "../../store/reducers/auth/authSlice";
import {useEffect} from "react";
import {IUser} from "../../models/IUser";
import Loading from "../Loading";

const AppRouter = () => {
  const privatePages = useRoutes(privateRoutes);
  const publicPages = useRoutes(publicRoutes);
  const { isAuth, isInit } = useAppSelector((state) => state.auth);
  const { login, init } = authActions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isAuth = !!localStorage.getItem('auth') ?? false;
    const userString = localStorage.getItem('user') ?? false;

    if (isAuth && userString) {
      const user: IUser = JSON.parse(userString);

      dispatch(login(user))
    } else {
      dispatch(init());
    }
  }, []);

  if(!isInit) {
    return (
      <Loading />
    );
  }

  if (isAuth) {
    return privatePages;
  }

  return publicPages;
};

export default AppRouter;
