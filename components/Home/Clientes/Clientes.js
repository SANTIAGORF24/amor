import React from "react";

const Cupon = ({ titulo, descripcion, validez, color }) => {
  return (
    <div
      className={`rounded-lg p-6 text-center w-full md:w-64 mx-2 mb-4 shadow-lg ${color}`}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{titulo}</h3>
      <p className="text-xs mb-2 text-white">{descripcion}</p>
      <p className="text-sm text-white">Válido por: {validez}</p>
    </div>
  );
};

const CuponesDeAmor = () => {
  const cupones = [
    {
      titulo: "Cupón para omitir drama",
      descripcion: "Usa este cupón para evitar dramas innecesarios",
      validez: "1 vez",
    },
    {
      titulo: "Cupón para decir sí",
      descripcion: "Úsalo cuando necesites un 'sí' garantizado",
      validez: "2 veces",
    },
    {
      titulo: "Cupón para un picnic",
      descripcion: "Disfruta de un romántico picnic al aire libre",
      validez: "1 vez",
    },
    {
      titulo: "Cupón para el sin respeto",
      descripcion: "Usa este cupón cuando quieras el sin respeto xd",
      validez: "1 vez",
    },
    {
      titulo: "Cupón para un masaje",
      descripcion: "Relájate con un masaje de 30 minutos",
      validez: "2 veces",
    },
    {
      titulo: "Cupón para elegir película",
      descripcion: "Elige la película para la noche de cine sin discusión",
      validez: "3 veces",
    },
    {
      titulo: "Cupón para un día de mimos",
      descripcion: "Disfruta de un día lleno de atenciones y cariño",
      validez: "1 vez",
    },
    {
      titulo: "Cupón para una sorpresa",
      descripcion: "Recibe una sorpresa especial de tu pareja",
      validez: "2 veces",
    },
    {
      titulo: "Cupón para una cena romántica",
      descripcion: "Disfruta de una cena romántica en casa o fuera",
      validez: "1 vez",
    },
  ];

  return (
    <div
      id="cupones-amor"
      className="w-full flex flex-col justify-center items-center bg-white py-12"
    >
      <div className="w-full max-w-6xl flex flex-col justify-center items-center px-4">
        <div className="flex flex-col justify-center items-center space-y-8 mb-12">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-center text-black">
            Cupones de Amor
          </h2>
          <p className="text-lg text-center text-gray-600">
            9 formas especiales de demostrar tu amor
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cupones.map((cupon, index) => (
            <Cupon
              key={index}
              {...cupon}
              color={index % 2 === 0 ? "bg-blue-500" : "bg-purple-500"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuponesDeAmor;
