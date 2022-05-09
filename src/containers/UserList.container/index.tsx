import React, { FC } from 'react';
import {userApi} from "../../services/user";
import User from "../../components/User";

const { useGetUserListQuery } = userApi;

const UserListContainer: FC = () => {
  const { data: users, error, isLoading } = useGetUserListQuery(null);

  if (error) {
    return (
      <div>
        <div>Список не загружен</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <ul>
      {users?.map((user) => (
        <User name={user.login} />
      ))}
    </ul>
  );
};

export default UserListContainer;
