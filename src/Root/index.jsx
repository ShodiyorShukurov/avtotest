import EasyPage from "../Components/Easy";
import MainPage from "../Components/MainPage";
import HeaderPage from "../Components/Header";
import YouLost from "../Components/YouLost";
import YouWin from "../Components/YouWin";
import FooterPage from "../Components/Footer";
import MediumPage from "../Components/Medium";
import HardPage from "../Components/Hard";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";

const Root = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderPage />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/easy" element={<EasyPage />} />
        <Route path="/medium" element={<MediumPage />} />
        <Route path='/hard' element={<HardPage />} />
        <Route path="/youlost" element={<YouLost />} />
        <Route path="/youwin" element={<YouWin />} />
      </Routes>
      <FooterPage />
    </Layout>
  );
};

export default Root;
