import { Input } from "../ui/Input.jsx";

const DatosPersonales = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Datos Personales</h2>
      <div className="space-y-4">
        <Input
          label="Correo"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        {/* Otros campos... */}
      </div>
    </div>
  );
};

export default DatosPersonales;
