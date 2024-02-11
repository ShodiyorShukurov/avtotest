import EasyPage from "../Components/Easy";
import MainPage from "../Components/MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderPage from "../Components/Header";
import YouLost from "../Components/YouLost";
import YouWin from "../Components/YouWin";
import FooterPage from "../Components/Footer";
import MediumPage from "../Components/Medium";
import { Layout } from "antd";

const Root = () => {
  return (
    <Layout style={{minHeight: "100vh"}}>
      <HeaderPage />
      <main>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/easy" element={<EasyPage />} />
          <Route path="/medium" element={<MediumPage />} />
          <Route path="/youlost" element={<YouLost />} />
          <Route path="/youwin" element={<YouWin />} />
        </Routes>
      </main>
      <FooterPage />
    </Layout>
  );
};

export default Root;
