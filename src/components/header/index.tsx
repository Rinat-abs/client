import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom"; 
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import classes from "./index.module.css";
import { CustomButton } from "../custom-button";
import { Paths } from "../../paths"; 

export const Header = () => {
  return (
    <Layout.Header className={classes.header}>
      <Space>
        <TeamOutlined className={classes.temIcon} />
        <Link to={Paths.home}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>

      <Space>
        <Link to={Paths.register}>
          <CustomButton type="ghost" icon={<UserOutlined/>}>Зарегистрироваться</CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton type="ghost" icon={<LoginOutlined/>}>Авторизоваться</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
