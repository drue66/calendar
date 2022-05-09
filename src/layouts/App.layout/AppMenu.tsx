import React from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Menu} from "antd";

const AppMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'nav 1',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
        },
      ]}
    />
  );
};

export default AppMenu;
