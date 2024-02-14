import { Link } from "react-router-dom";
import { Layout, Button, Flex, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;
import "./mainPage.scss";

const MainPage = () => {
  return (
    <Content
      style={{ backgroundColor: "#131629" }}
      className="main-page__section"
    >
        <Flex vertical justify="center" align="center">
          <Title className="main-title" style={{ color: "#fff", textAlign:"center" }}>
            Yo&apos;l belgilari imtihoniga xush kelibsiz!
          </Title>
          <Title
            className="main-subtitle"
            level={3}
            style={{ color: "#fff", marginBottom: "30px" }}
          >
            Sinov darajasini tanlang
          </Title>
          <Link to="/easy" className="main-btn">
            <Button type="primary" block>
              Oson: 8 minut
            </Button>
          </Link>
          <Link to="/medium" className="main-btn">
            <Button
              type="primary"
              block
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              O&apos;rtacha: 5 minut
            </Button>
          </Link>
          <Link to="/hard" className="main-btn">
            <Button type="primary" block>
              Qiyin: 3 minut
            </Button>
          </Link>
        </Flex>
    </Content>
  );
};

export default MainPage;
