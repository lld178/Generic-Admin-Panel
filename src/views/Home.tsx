import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const view: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Breadcrumb style={{ margin: '16px 10px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '0 16px' }}>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default view;
