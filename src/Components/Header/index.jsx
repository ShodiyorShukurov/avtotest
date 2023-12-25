import React from "react";
import { Flex, Image, Switch } from "antd";
import logo from "../../assets/images/logo_new.png";
import { Header } from "antd/es/layout/layout";


const HeaderPage = () => {
  const [theme, setTheme] = React.useState("dark");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Header>
      <div className="container">
        <Flex justify="space-between" align="center" padding={5}>
          <div className="site-header__start">
            <Image src={logo} alt="" width="150px" />
          </div>
          <div className="site-header__end">
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Flex>
      </div>
    </Header>
  );
};

export default HeaderPage;
