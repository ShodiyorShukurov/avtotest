import { Link } from "react-router-dom";
import { Layout, Button, Flex, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

const MainPage = () => {
  return (
    <Content style={{ background: "#131629", height: "100%", paddingBottom:"100px" }}>
      <div className="container">
        <Flex vertical justify="center" align="center">
          <Title style={{ color: "#fff" }}>Welcom to road signs exam </Title>
          <Title level={3} style={{ color: "#fff" }}>
            Select a test level
          </Title>

          <Link to="/easy">
            <Button type="primary" style={{  width: "400px" }}>
              Easy: 8 min
            </Button>
          </Link>
          <Link to="/medium" style={{ display: "block" }}>
            <Button
              type="primary"
              style={{ width: "400px", margin: "20px" }}
            >
              Medium: 5 min
            </Button>
          </Link>
          <Button type="primary" style={{ width: "400px" }}>
            Hard: 3 min
          </Button>
        </Flex>
      </div>
    </Content>
  );
};

export default MainPage;
