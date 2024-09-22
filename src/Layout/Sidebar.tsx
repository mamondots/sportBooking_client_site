import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

import { Outlet } from "react-router-dom";
import DinamicSideBar from "./DinamicSideBar";

const Sidebar = () => {
  return (
    <Layout
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        height: "100%",
        background: "#222",
      }}
    >
      <DinamicSideBar></DinamicSideBar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
