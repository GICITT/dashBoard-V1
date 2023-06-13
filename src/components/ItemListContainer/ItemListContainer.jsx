import { useEffect, useState } from "react";
import { mockFetch } from "../../Utils/moke.fetch";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mockFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => console.log("siempre al final"));
  }, []);

  console.log(productos);

  return (
    <div className="p-8 grid  grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3 ">
      {productos.length !== 0 ? (
        productos.map((producto) => (
          <div
            className="bg-[#1F1D2B] p-8 rounded-xl gap-2 text-center text-gray-300 flex flex-col items-center rounded-lg"
            key={producto.id}
          >
            <img
              className="w-40 h-40 object-cover -mt-20 shadow-2x1 rounded-full"
              src={producto.img}
              alt="imagen"
            />
            <div className="text-gray-300">{producto.name}</div>
            <span className="text-gray-400">$ {producto.price}</span>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded">
              Add to the cart
            </button>
          </div>
        ))
      ) : (
        <h2 className="text-white text-xl">Cargando....</h2>
      )}
    </div>
  );
};

export default ItemListContainer;
