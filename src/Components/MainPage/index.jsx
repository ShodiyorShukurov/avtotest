import { Link } from "react-router-dom";
import { Layout, Button, Flex, Typography } from "antd";
import HeaderPage from "../Header";
import FooterPage from "../Footer";
const { Content } = Layout;
const { Title } = Typography;

const MainPage = () => {
  return (
    <Layout
      style={{
        background: "#fff",
        width: "100%",
      }}
    >
      <HeaderPage />
      <Content>
        <div className="container">
          <Flex vertical justify="center" align="center">
            <Title>Welcom to road signs exam </Title>
            <Title level={3}>Select a test level </Title>

            <Link to="/easy">
              <Button type="primary" style={{ width: "400px" }}>
                Easy: 8 min
              </Button>
            </Link>
            <Button type="primary" style={{ width: "400px", margin: "20px" }}>
              Medium: 5 min
            </Button>
            <Button type="primary" style={{ width: "400px" }}>
              Hard: 3 min
            </Button>
          </Flex>
        </div>
      </Content>
      <FooterPage />
    </Layout>
  );
};

export default MainPage;
