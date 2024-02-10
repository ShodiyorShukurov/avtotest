import EasyPage from "../Components/Easy";
import MainPage from "../Components/MainPage";
import { Routes, Route, Navigate} from "react-router-dom";
import YouLost from "../Components/YouLost";
import YouWin from "../Components/YouWin";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/easy" element={<EasyPage />} />
        <Route path="/youlost" element={<YouLost />} />
        <Route path="/youwin" element={<YouWin/>} />
      </Routes>
    </>
  );
};

export default Root;
