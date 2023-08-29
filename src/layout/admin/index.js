import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { TOKEN, USER } from "../../const";
import { adminRoutes } from "../../const/menus";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./admin.scss";
import { ROLE } from "../../utils";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const logout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    window.location.href = "/register";
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"> Logo </div>
        <Link style={{color:"white",fontSize:"20px",padding:"10px",textDecoration:"none"}} to="/">Home</Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            ...adminRoutes.map((route, i) => ({
              key: i,
              icon: <Link to={"/" + route.url}>{route.icon}</Link>,
              label: route.label,
            })),
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="antd-header"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <button style={{backgroundColor:"red",color:"white",fontSize:"20px"}} className="logoutBtn" onClick={logout}>
            Logout
          </button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
