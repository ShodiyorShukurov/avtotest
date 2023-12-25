import EasyPage from "../Components/Easy";
import MainPage from "../Components/MainPage";
import { Routes, Route, Navigate} from "react-router-dom";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/easy" element={<EasyPage />} />
      </Routes>
    </>
  );
};

export default Root;
