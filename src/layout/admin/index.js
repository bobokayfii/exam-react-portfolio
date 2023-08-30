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
  const home = () => {
    
    window.location.href = "/";
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"> Logo </div>

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
          <div style={{display:"flex"}}>
            <button
              style={{
                background:
                  " linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%",
                color: "#fff",
                padding: "10px 25px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                borderRadius: " 18px",
                marginRight: " 10px",
              }}
              className="logoutBtn"
              onClick={logout}
            >
              Logout
            </button>
            <button
              style={{
                background:
                  " linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%",
                color: "#fff",
                padding: "10px 25px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                borderRadius: " 18px",
                marginRight: " 10px",
              }}
              className="logoutBtn"
              onClick={home}
            >
              Home
            </button>
          </div>
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
