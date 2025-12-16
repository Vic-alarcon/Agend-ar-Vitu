import Link from "next/link";

const Card = ({ province }) => {
  return (
    <Link href="/blank" className="block">
      <div className="border rounded-lg w-[175px] h-[230px] flex flex-col text-center">
        <img
          src={province.heroImage}
          alt={province.nombre}
          className="w-full h-[100px] object-cover rounded-t-lg"
        />

        <div className="flex flex-col flex-grow px-2 py-1">
          <h4 className="text-sm font-medium">
            {province.nombre}
          </h4>

          <p className="text-xs text-gray-600 mt-1">
            {province.descripcion}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
