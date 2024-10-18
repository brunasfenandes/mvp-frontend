import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RoomPage from "./pages/RoomPage/RoomPage";
import { Header } from "./components/Header/Header";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms/:id" element={<RoomPage />} />
        <Route path="/rooms/:id/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
