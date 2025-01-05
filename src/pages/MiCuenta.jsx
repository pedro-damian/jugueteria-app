import { useState } from "react";
import SidebarCuenta from "../components/cuenta/SideBarCuenta";
import DatosPersonales from "../components/cuenta/DatosPersonales";
import MisPedidos from "../components/cuenta/MisPedidos";
import DireccionesEnvio from "../components/cuenta/DireccionesEnvio";
//import Favoritos from "../components/cuenta/Favoritos";
import CambiarPassword from "../components/cuenta/CambiarPassword";

function MiCuenta() {
  const [seccionActiva, setSeccionActiva] = useState("datos");

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case "datos":
        return <DatosPersonales />;
      case "pedidos":
        return <MisPedidos />;
      case "direcciones":
        return <DireccionesEnvio />;
      //case "favoritos":
      //return <Favoritos />;
      case "password":
        return <CambiarPassword />;
      default:
        return <DatosPersonales />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Mi Cuenta</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <SidebarCuenta
          seccionActiva={seccionActiva}
          setSeccionActiva={setSeccionActiva}
        />
        <div className="flex-1">{renderizarSeccion()}</div>
      </div>
    </div>
  );
}

export default MiCuenta;
