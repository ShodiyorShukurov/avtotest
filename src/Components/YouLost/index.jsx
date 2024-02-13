import { Link } from "react-router-dom";
import Typography from "antd/es/typography/Typography";
import { Button } from "antd";
import { Content } from "antd/es/layout/layout";
import './youlost.scss'

const YouWin = () => {
  return (
    <Content
      style={{ backgroundColor: "#131629" }}
      className="main-page__section you-win__section"
    >
      <Typography.Title
        level={2}
        style={{ margin: 0, color: "#fff", marginBottom: "20px" }}
      >
        Afsus siz yutqazdingiz!!
      </Typography.Title>
      <Typography.Title
        level={4}
        style={{
          margin: 0,
          color: "#fff",
          display: "block",
          marginBottom: "20px",
        }}
      >
        To&apos;g&apos;ri javoblar soni : {localStorage.getItem("score")}
      </Typography.Title>
      <Typography.Title
        level={4}
        style={{
          margin: 0,
          color: "#fff",
          display: "block",
          marginBottom: "20px",
        }}
      >
        Noto&apos;g&apos;ri javoblar soni : {localStorage.getItem("false")}
      </Typography.Title>
      <Link to="/home">
        <Button ghost>Bosh sahifa</Button>
      </Link>
    </Content>
  );
};

export default YouWin;
