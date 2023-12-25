import { Col, Row, Typography, Button, Image, Flex } from "antd";
import { Link } from "react-router-dom";
import "./easy.scss";
import img from "../../assets/images/aholi_punkti.gif";

const EasyPage = () => {
  return (
    <section className="easy-section">
      <div className="container">
        <Row>
          <Col span={6}>
            <Typography.Title
              level={2}
              style={{ margin: 0, PaddingTop: "30px", color: "white" }}
            >
              Easy test started
            </Typography.Title>
            <Link to="/home">
              <Button type="primary" style={{ marginTop: "20px" }}>
                Back
              </Button>
            </Link>
          </Col>
          <Col span={12}>
            <Flex
              vertical
              justify="center"
              align="center"
              style={{ paddingTop: "80px" }}
            >
              <Image src={img} alt="" width="180px" />
              <Typography.Paragraph
                style={{ fontSize: "24px", color: "white" }}
              >
                Bu qanday belgi?{" "}
              </Typography.Paragraph>
              <Button
                block
                style={{ background: "transparent", color: "white" }}
                ghost
              >
                Default
              </Button>
              <Button
                block
                style={{
                  background: "transparent",
                  color: "white",
                  margin: "20px",
                }}
                ghost
              >
                Default
              </Button>
              <Button
                block
                style={{
                  background: "transparent",
                  color: "white",
                  marginBottom: "20px",
                }}
                ghost
              >
                Default
              </Button>
              <Button
                block
                style={{ background: "transparent", color: "white" }}
                ghost
              >
                Default
              </Button>
            </Flex>
          </Col>
          <Col span={6}>
            <Flex
              vertical
              justify="center"
              align="start"
              style={{ paddingTop: "30px" }}
            >
              <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
                Qolgan vaqt: 08:00
              </Typography.Title>
              <Typography.Title
                level={3}
                style={{
                  color: "white",
                  margin: 0,
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Qolgan savollar: 1/10
              </Typography.Title>
              <Typography.Title
                level={3}
                style={{ color: "white", margin: 0, marginBottom: "10px" }}
              >
                Xato savollar: 0/5
              </Typography.Title>
              <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
                To'g'ri savollar: 0
              </Typography.Title>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EasyPage;
