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
//import ProductCatalog from "./pages/ProductCatalog";
//import ProductList from "./pages/ProductList";
import ProductDetail from "./components/catalogo/ProductDetail";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import { AppProviders } from "./context/AppProviders";
import ConfirmacionOrden from "./components/checkout/ConfirmacionOrden";
import CatalogoProductos from "./pages/CatalogoProductos";
import Favoritos from "./pages/Favoritos";
//import FooterEmpresa from "./pages/Footer";
import Nosotros from "./pages/Nosotros";
import NuestrasTiendas from "./pages/NuestrasTiendas";
import Contactos from "./pages/Contactos";
///* Ruta nesecitas ayuda pages";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ClaimsBook from "./pages/ClaimsBook";

function App() {
  return (
    <AuthProvider>
      <AppProviders>
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
              <Route
                path="/confirmacion-orden"
                element={<ConfirmacionOrden />}
              />
              <Route path="/favoritos" element={<Favoritos />} />

              <Route path="/product-catalog" element={<CatalogoProductos />} />
              {/* <Route path="/products" element={<ProductList />} /> */}
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Rutas en construcción */}
              <Route path="/ofertas" element={<UnderConstruction />} />

              {/* Ruta footer pages */}
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
              <Route path="/contactos" element={<Contactos />} />
               {/* Ruta nesecitas ayuda pages */}
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/claims-book" element={<ClaimsBook />} />
              {/* Ruta 404 para páginas no encontradas */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProviders>
    </AuthProvider>
  );
}

export default App;
