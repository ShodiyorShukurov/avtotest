import { Footer } from "antd/es/layout/layout";

const FooterPage = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        width: "100%",
        backgroundColor: "#001529",
        color: "#FFFFFF",
      }}
    >
      Mualliflik huquqi &copy; {new Date().getFullYear()}{" "}
      <a className="" href="https://t.me/ShukurovShB" target="blanck">
        Shukurov Shodiyor
      </a>
    </Footer>
  );
};

export default FooterPage;
