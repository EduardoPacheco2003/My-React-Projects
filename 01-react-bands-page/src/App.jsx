import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AcercaDe from "./pages/AcercaDe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
