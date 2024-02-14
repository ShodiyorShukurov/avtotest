import React from "react";
import { Flex, Image, Switch } from "antd";
import logo from "../../assets/images/logo_new.png";
import { Header } from "antd/es/layout/layout";
import './header.scss'


const HeaderPage = () => {
  const [theme, setTheme] = React.useState("dark");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Header style={{  boxShadow: "0px 2px 4px #0000000e"}}>
 
        <Flex justify="space-between" align="center" padding={5}>
          <div className="site-header__start">
            <Image className="site-logo" src={logo} alt="avtotest" width="150" />
          </div>
          <div className="site-header__end">
            <Switch
            className="site-header__switch"
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Flex>
    </Header>
  );
};

export default HeaderPage;
