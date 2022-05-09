import {Avatar, Dropdown, Menu, Space, Typography} from 'antd';
import React, { FC } from 'react';
import styles from './ProfileBar.module.scss';

interface Props {
  name: string;
  onExitClick: () => void;
}

const ProfileBar: FC<Props> = (props) => {
  const { name, onExitClick } = props;
  const menu = (
    <Menu
      items={[
        {
          key: 'exit',
          label: 'Выход',
          onClick: () => onExitClick(),
        },
      ]}
    />
  );

  return (
    <Space>
      <Typography.Text>
        {name}
      </Typography.Text>
      <Dropdown overlay={menu} placement="bottomLeft" arrow trigger={['click']}>
        <Avatar className={styles.avatar}>
          {name[0]}
        </Avatar>
      </Dropdown>
    </Space>
  );
};

export default ProfileBar;
