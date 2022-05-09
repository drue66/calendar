import {Layout, Row, Space} from 'antd';
import React, {FC, ReactNode, useState} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import AppMenu from "./AppMenu";
import Notifications from "../../components/Notifications";
import styles from './AppLayout.module.scss';
import ProfileBar from "../../components/ProfileBar";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logoutRequest} from "../../store/reducers/auth/actionCreators";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { login } = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleToggle = () => setCollapsed(!collapsed);

  const handleExit = () => dispatch(logoutRequest());

  return (
    <Layout className={styles.layout}>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <AppMenu />
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles.header}>
          <Row justify={'space-between'}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: handleToggle,
            })}
            <Space size={[16, 16]}>
              <ProfileBar name={login} onExitClick={handleExit} />
              <Notifications />
            </Space>
          </Row>
        </Layout.Header>
        <Layout.Content className={styles.contentWrapper}>
          <div className={styles.content}>
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
