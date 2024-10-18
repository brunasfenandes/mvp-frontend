import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RoomPage from "./pages/RoomPage/RoomPage";
import { Header } from "./components/Header/Header";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms/:id" element={<RoomPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>;
}

export default App;
