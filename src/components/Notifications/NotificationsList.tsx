import {Avatar, List } from 'antd';
import React, { FC } from 'react';

interface Props {
  data: any[],
}

const NotificationsList: FC<Props> = (props) => {
  const { data } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
};

export default NotificationsList;
