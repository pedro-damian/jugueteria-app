function BrandSection() {
  const brands = [
    {
      id: 1,
      name: "Playskool",
      image: "/src/assets/brands/hasbro-logo.png",
    },
    {
      id: 2,
      name: "LEGO",
      image: "/src/assets/brands/lego-logo.png",
    },
    {
      id: 3,
      name: "Bandai",
      image: "/src/assets/brands/bandai-logo.png",
    },
    {
      id: 4,
      name: "Barbie",
      image: "/src/assets/brands/barbie-logo.png",
    },
    {
      id: 5,
      name: "Hot Wheels",
      image: "/src/assets/brands/hot-wheels-logo.png",
    },
    {
      id: 6,
      name: "UNO",
      image: "/src/assets/brands/marvel-logo.png",
    },
    {
      id: 7,
      name: "UNO",
      image: "/src/assets/brands/playskool-logo.png",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Marcas</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="w-16 md:w-24 hover:opacity-75 transition-opacity"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-contain max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSection;