import { Link } from "react-router-dom";
import { Layout, Button, Flex, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;
import "./mainPage.scss";

const MainPage = () => {
  return (
    <Content style={{ backgroundColor: "#131629" }} className="main-page__section">
      <div className="container">
        <Flex vertical justify="center" align="center">
          <Title style={{ color: "#fff" }}>Welcom to road signs exam </Title>
          <Title level={3} style={{ color: "#fff" }}>
            Select a test level
          </Title>
          <Link to="/easy" className="main-btn">
            <Button type="primary" block>
              Easy: 8 min
            </Button>
          </Link>
          <Link to="/medium" className="main-btn">
            <Button
              type="primary"
              block
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Medium: 5 min
            </Button>
          </Link>
          <Link to="/hard" className="main-btn">
            <Button type="primary" block>
              Hard: 3 min
            </Button>
          </Link>
        </Flex>
      </div>
    </Content>
  );
};

export default MainPage;
