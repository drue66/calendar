import React, {FC, ReactNode} from 'react';
import {Card, Layout, Spin} from "antd";
import styles from "./SignLayout.module.scss";
import {useAppSelector} from "../../hooks/redux";

interface Props {
  children: ReactNode;
}

const SignLayout: FC<Props> = (props) => {
  const { children } = props;
  const { isLoading } = useAppSelector((state) => state.auth);

  return (
    <Layout className={styles.layout}>
      <div className={styles.wrap}>
        <Spin spinning={isLoading}>
          <Card>
            {children}
          </Card>
        </Spin>
      </div>
    </Layout>
  );
};

export default SignLayout;
