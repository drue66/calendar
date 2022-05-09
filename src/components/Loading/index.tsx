import { Spin } from 'antd';
import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.wrap}>
      <Spin spinning size={'large'}/>
    </div>
  );
};

export default Loading;
