import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AcercaDe from "./pages/AcercaDe";
import Page404 from "./pages/Page404";
import ArcticMonkeys from "./pages/ArcticMonkeys";
import Footer from "./components/Footer";
import FranzFerdinand from "./pages/FranzFerdinand";
import TheMarias from "./pages/TheMarias";
import CageTheElephant from "./pages/CageTheElephant";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/arctic-monkeys" element={<ArcticMonkeys />} />
          <Route path="/franz-ferdinand" element={<FranzFerdinand />} />
          <Route path="/the-marias" element={<TheMarias />} />
          <Route path="/cage-the-elephant" element={<CageTheElephant />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
