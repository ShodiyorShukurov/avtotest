import { Footer } from 'antd/es/layout/layout';

const FooterPage = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      Copyright &copy; {new Date().getFullYear()}
      <a className="text-white" href="https://t.me/ShukurovShB" target="blanck"> Shukurov Shodiyor
      </a>
    </Footer>
  );
}

export default FooterPage