import "./App.scss";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
