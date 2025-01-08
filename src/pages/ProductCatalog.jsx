import React from "react";
import "./Catalogo.css"; // Asegúrate de tener los estilos adecuados aquí.

const Catalogo = () => {
  const productos = [
    {
      id: 1,
      nombre: "Figura de Acción Goku",
      marca: "BANPRESTO",
      precio: "74.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/f/i/figura-goku-dragon-ball-16-cm-68805-default-1.jpg",
    },
    {
      id: 2,
      nombre: "Set de Construcción Star Wars",
      marca: "LEGO",
      precio: "129.90",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_871088-MLA51651758779_092022-O.webp",
    },
    {
      id: 3,
      nombre: "Pista de Carreras",
      marca: "HOT WHEELS",
      precio: "89.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/i/pista-de-carreras-2-autos-52788-default-1.jpg",
    },
    {
      id: 4,
      nombre: "Muñeca Dreamtopia",
      marca: "BARBIE",
      precio: "99.90",
      imagen:
        "https://oechsle.vteximg.com.br/arquivos/ids/8429519-998-998/image-f53aab0b0cce447abd2a36a7854f837b.jpg?v=637865981468230000",
    },
    {
      id: 5,
      nombre: "Figura de Acción Naruto",
      marca: "BANPRESTO",
      precio: "124.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/n/a/naruto-figura-de-accion-uzumaki-naruto-adulto-60131003-default-1.jpg",
    },
    {
      id: 6,
      nombre: "Set de Bloques de Aprendizaje",
      marca: "PLAYSCHOOL",
      precio: "59.90",
      imagen:
        "https://m.media-amazon.com/images/I/81JBez3mbzL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 7,
      nombre: "Figura de Acción Uchiha Sasuke",
      marca: "BANPRESTO",
      precio: "147.30",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/f/i/figura-coleccionable-de-naruto-shippuden-grandista-nero-sasuke-2-86498-default-1.jpg",
    },
    {
      id: 8,
      nombre: "Bloques Dinosaurio Convertible 438 Piezas",
      marca: "PLAYSCHOOL",
      precio: "44.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/b/l/bloques-dinosaurio-convertible-438-piezas-37150-default-1.jpg",
    },
    {
      id: 9,
      nombre:
        "Vehículo Hot Wheels Diecast Autos Friccion Sorpresa Surtido Pack X2",
      marca: "HOT WHEELS",
      precio: "79.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/v/e/vehiculo-hot-wheels-die-cast-paquete-2-autos-friccion-sorpresa-81814-default-1.jpg",
    },
    {
      id: 10,
      nombre: "Juego De Mesa Hasbro Monopoly Peru Refresh",
      marca: "HASBRO",
      precio: "77.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/j/u/juego-de-mesa-hasbro-gaming-monopoly-peru-refresh-59588-default-1.jpg",
    },
    {
      id: 11,
      nombre:
        "Set De Construcción Lego Persecución Batmobile Batman Vs The Joker",
      marca: "LEGO",
      precio: "159.20",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/b/l/bloques-lego-persecucion-en-el-batmobile-batman-vs-t-super-heroe-79262-default-1.jpg",
    },
    {
      id: 12,
      nombre: "Juguete De Construcción Lego Bosque Prohibido Criaturas Mágicas",
      marca: "LEGO",
      precio: "215.00",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/l/e/lego-bosque-prohibido-criaturas-magicas-87370-default-1.png",
    },
    {
      id: 13,
      nombre: "Figura de Acción Vegeta",
      marca: "BANPRESTO",
      precio: "74.60",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/f/i/figura-coleccionable-de-dragon-ball-z-solid-edg-v10-a-vegeta-86402-default-1.jpg",
    },
    {
      id: 14,
      nombre: "Set De Juego Barbie Dream Closet Nuevo Con Muñeca",
      marca: "BARBIE",
      precio: "201.80",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/b/a/barbie-set-de-juego-dream-closet-nuevo-con-muneca-62755-default-2.jpg",
    },
    {
      id: 15,
      nombre: "Figura de Acción Broly Super Saiyan",
      marca: "BANPRESTO",
      precio: "90.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/d/r/dragon-ball-figura-ss-broly-54229-default-1.jpg",
    },
    {
      id: 16,
      nombre: "Set Barbie Restaurante Con Muñeca",
      marca: "BARBIE",
      precio: "199.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/b/a/barbie-restaurante-con-muneca-60274-default-1.jpg",
    },
    {
      id: 17,
      nombre: "Juguete De Construcción Lego Caja De Ladrillos Creativos Vibran",
      marca: "LEGO",
      precio: "374.00",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/l/e/lego-caja-de-ladrillos-creativos-vibran-87354-default-1.png",
    },
    {
      id: 18,
      nombre: "Juego De Mesa Hasbro Jenga",
      marca: "HASBRO",
      precio: "47.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/j/u/juego-de-mesa-hasbro-gaming-jenga-9283-default-1.jpg",
    },
    {
      id: 19,
      nombre: "Juego De Mesa Hasbro Twister",
      marca: "HASBRO",
      precio: "79.90",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/t/w/twister-clasico-7885-default-1.jpg",
    },
    {
      id: 20,
      nombre: "Vehículo Hot Wheels Remolque Tiburón",
      marca: "HOT WHEELS",
      precio: "70.40",
      imagen:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/h/o/hot-wheels-remolque-tiburon-49048-default-1.jpg",
    },
  ];

  return (
    <div className="catalogo-container">
      {/* Encabezado */}
      <header className="catalogo-header">
        <h1>Catálogo</h1>
        <div className="ordenar">
          <label htmlFor="ordenar">Ordenar por:</label>
          <select id="ordenar">
            <option value="menor-mayor">Precio: menor a mayor</option>
            <option value="mayor-menor">Precio: mayor a menor</option>
          </select>
        </div>
      </header>

      <div className="catalogo-content">
        {/* Barra de filtros */}
        <aside className="filtros">
          <h2>Filtros</h2>
          <div className="filtro-categoria">
            <h3>Categorías</h3>
            <ul>
              <li>
                <input type="checkbox" id="juegos" />
                <label htmlFor="juegos"> Juegos de Mesa</label>
              </li>
              <li>
                <input type="checkbox" id="deportivos" />
                <label htmlFor="deportivos"> Juguetes Educativos</label>
              </li>
              <li>
                <input type="checkbox" id="deportivos" />
                <label htmlFor="deportivos"> Figuras de Accion</label>
              </li>
            </ul>
          </div>

          <div className="filtro-marcas">
            <h3>Marcas</h3>
            <ul>
              <li>
                <input type="checkbox" id="BANPRESTO" />
                <label htmlFor="BANPRESTO"> BANPRESTO</label>
              </li>
              <li>
                <input type="checkbox" id="LEGO" />
                <label htmlFor="LEGO"> LEGO</label>
              </li>
              <li>
                <input type="checkbox" id="HOT WHEELS" />
                <label htmlFor="HOT WHEELS"> HOT WHEELS</label>
              </li>
              <li>
                <input type="checkbox" id="BARBIE" />
                <label htmlFor="BARBIE"> BARBIE</label>
              </li>
              <li>
                <input type="checkbox" id="PLAYSCHOOL" />
                <label htmlFor="PLAYSCHOOL"> PLAYSCHOOL</label>
              </li>
              <li>
                <input type="checkbox" id="HASBRO" />
                <label htmlFor="HASBRO"> HASBRO</label>
              </li>
            </ul>
          </div>

          <div className="filtro-precio">
            <h3>Precio</h3>
            <ul>
              <li>
                <input type="radio" name="precio" id="50-100" />
                <label htmlFor="50-100"> S/50 - S/100</label>
              </li>
              <li>
                <input type="radio" name="precio" id="100-200" />
                <label htmlFor="100-200"> S/100 - S/200</label>
              </li>
              <li>
                <input type="radio" name="precio" id="200+" />
                <label htmlFor="200+"> Más de S/200</label>
              </li>
            </ul>
          </div>
        </aside>

        {/* Lista de productos */}
        <section className="productos">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
                className="producto-imagen"
              />
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-marca">{producto.marca}</p>
              <p className="producto-precio">S/{producto.precio}</p>
              <button className="producto-agregar">Agregar al carrito</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Catalogo;
