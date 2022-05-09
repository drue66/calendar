import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IUser} from "../models/IUser";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints: (build) => ({
    getUserList: build.query<IUser[], null>({
      query: () => 'user',
    }),
    getUserById: build.query<IUser, number>({
      query: (id) => `user/${id}}`
    })
  }),
});
