import {Navigate, RouteObject} from "react-router-dom";
import CalendarPage from "../pages/Calendar.page";
import LoginPage from "../pages/Login.page";
import RegistrationPage from "../pages/Registration.page";

export enum RouteNames {
  LOGIN = '/login',
  REGISTRATION = '/registration',
  CALENDAR = '/',
}

export const privateRoutes: RouteObject[] = [
  {
    path: RouteNames.CALENDAR,
    element: <CalendarPage />,
  },
  {
    path: '*',
    element: <Navigate to={RouteNames.CALENDAR} />
  }
];

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RouteNames.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: '*',
    element: <Navigate to={RouteNames.LOGIN} />
  }
];
