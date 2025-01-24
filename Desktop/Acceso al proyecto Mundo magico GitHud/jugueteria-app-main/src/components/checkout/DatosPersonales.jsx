import { Input } from "../ui/Input.jsx";

const DatosPersonales = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Datos Personales</h2>
      <div className="space-y-4">
        <Input
          label="Nombre"
          type="text"
          name="username"
          placeholder="Ingrese su Nombre"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          required
        />
        <Input
          label="Apellido"
          type="text"
          name="lastname"
          placeholder="Ingrese su Apellido"
          value={formData.lastname}
          onChange={handleChange}
          error={errors.lastname}
          required
        />
        <Input
          label="Correo"
          type="email"
          name="email"
          placeholder="Ingrese su Correo"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <Input
          label="Telefono"
          type="tel"
          name="telefono"
          placeholder="INgrese su Telefono"
          value={formData.telefono}
          onChange={handleChange}
          error={errors.telefono}
          required
        />
        <Input
          label="DNI"
          type="text"
          name="dni"
          placeholder="Ingrese su Documento de Identidad"
          value={formData.dni}
          onChange={handleChange}
          error={errors.dni}
          required
        />
      </div>
    </div>
  );
};

export default DatosPersonales;
