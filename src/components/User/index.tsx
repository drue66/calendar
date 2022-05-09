import React, { FC } from 'react';

interface Props {
   name: string;
}

const User: FC<Props> = (props) => {
  const { name } = props;

  return (
    <li>{name}</li>
  );
};

export default User;
