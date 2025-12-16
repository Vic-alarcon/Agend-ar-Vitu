import Link from 'next/link';

const EventCard = ({ evento }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-2 w-[175px] h-[230px] flex flex-col justify-between text-center bg-white">
      <Link
        href="/blank"
        className="flex flex-col h-full text-inherit no-underline"
      >
        {/* Imagen */}
        <img
          src={evento.imagen}
          alt={evento.titulo}
          className="w-full h-[100px] object-cover rounded-md"
        />

        {/* Contenido */}
        <div className="flex flex-col flex-1 overflow-hidden px-1">
          <h4 className="mt-2 mb-1 text-sm font-semibold truncate">
            {evento.titulo}
          </h4>

          <p className="text-[10px] text-gray-600 leading-tight">
            📅 {evento.fecha}
            <br />
            📍 {evento.lugar}
          </p>

          <p className="mt-1 text-[10px] text-gray-700">
            Precio: ${evento.precio}
          </p>

          <p className="text-[10px] text-gray-700">
            Categoría: {evento.categoria}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;

