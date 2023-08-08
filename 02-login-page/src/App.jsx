import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import NotFoun404 from "./pages/NotFoun404";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Categories from "./pages/Categories";
import Analytics from "./pages/Analytics";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated, user } = state;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Rutas protegidas: */}
          <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
            <Route path="/principal" element={<MainPage />} />
            <Route path="/categorias" element={<Categories />} />
          </Route>
          {/* Rutas solo para permisos de analitycs: */}
          <Route
            path="/analiticas"
            element={
              <ProtectedRoute
                isAllowed={
                  isAuthenticated && user.permissions.includes("analize")
                }
                redirectTo="/principal"
              >
                <Analytics />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoun404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
