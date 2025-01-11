import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import MiCuenta from "./pages/MiCuenta";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./components/NotFound404";
import UnderConstruction from "./components/UnderConstruction";
import ProductCatalog from "./pages/ProductCatalog";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import { CheckoutProvider } from "./context/CheckoutContext";

function App() {
  return (
    <AuthProvider>
      <CheckoutProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mi-cuenta" element={<MiCuenta />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/product-catalog" element={<ProductCatalog />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Rutas en construcción */}
              <Route path="/favoritos" element={<UnderConstruction />} />
              <Route path="/ofertas" element={<UnderConstruction />} />

              {/* Ruta 404 para páginas no encontradas */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CheckoutProvider>
    </AuthProvider>
  );
}

export default App;
