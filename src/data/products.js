export const products = [
  {
    id: 1,
    name: "Juego De Mesa - Monopoly Clásico",
    brand: "Hasbro",
    price: 74.90,
    image: "/products/monopoly.jpg"
  },
  {
    id: 2,
    name: "LEGO City - Estación de Policía",
    brand: "Lego",
    price: 199.90,
    image: "/products/lego-police.jpg"
  },
  {
    id: 3,
    name: "Hot Wheels - Pack 5 Autos",
    brand: "Hot Wheels",
    price: 29.90,
    image: "/products/hot-wheels.jpg"
  },
  {
    id: 4,
    name: "Barbie - Casa de Sueños",
    brand: "Barbie",
    price: 299.90,
    image: "/products/barbie-house.jpg"
  },
  {
    id: 5,
    name: "Dragon Ball - Figura Goku Super Saiyan",
    brand: "Bandai",
    price: 89.90,
    image: "/products/goku-figure.jpg"
  },
  {
    id: 6,
    name: "Playskool - Set Primeros Bloques",
    brand: "Playskool",
    price: 49.90,
    image: "/products/playskool-blocks.jpg"
  }
]

export const featuredProducts = products.slice(0, 4)
