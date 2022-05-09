import React, {useState} from 'react';
import {Badge, Button, Drawer} from "antd";
import {NotificationOutlined} from "@ant-design/icons";
import NotificationsList from "./NotificationsList";

const Notifications = () => {
  const [visibleDriver, setVisibleDriver] = useState(false);

  return (
    <>
      <Button type="text" onClick={() => setVisibleDriver(true)} icon={
        <Badge dot>
          <NotificationOutlined style={{ fontSize: 16 }} />
        </Badge>
      }/>
      <Drawer
        title="Уведомления"
        placement={'right'}
        width={350}
        onClose={() => setVisibleDriver(false)}
        visible={visibleDriver}
      >
        <NotificationsList data={[
          { title: 'Ant Design Title 1' },
          { title: 'Ant Design Title 2' },
          { title: 'Ant Design Title 3' },
          { title: 'Ant Design Title 4' },
        ]} />
      </Drawer>
    </>
  );
};

export default Notifications;
