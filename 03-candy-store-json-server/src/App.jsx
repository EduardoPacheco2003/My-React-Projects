import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import NotFoun404 from "./pages/NotFoun404";
import Footer from "./components/Footer";
import ProductosPage from "./pages/ProductosPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/cartContext";
import { useContext } from "react";
import AuthContext from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { auth, user } = useContext(AuthContext);
  // const { permissions } = user;
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Header />
        <CartProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Rutas Protegidas: */}
            <Route element={<ProtectedRoute isAllowed={auth} />}>
              <Route path="/perfil" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFoun404 />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
