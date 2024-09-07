import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(Context);
  const addToCart = (item) => {
    return setCart([...cart, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex-none md:flex mt-20 mb-16">
      <div className="border-r w-fit pr-8 mx-auto">
        <button className="h-14 w-56 bg-black text-white font-semibold rounded-md">
          Rocking Chair
        </button>
        <hr className="mt-2 w-56" />
        <button className="h-14 w-56 text-[#717171] font-semibold rounded-md">
          Side Chair
        </button>
        <hr className="mt-2 w-56" />
        <button className="h-14 w-56 text-[#717171] font-semibold rounded-md">
          Lounge Chair
        </button>
        <hr className="mt-2 w-56" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 pl-10">
        {products.map((product) => (
          <div className="h-[484px] w-[277px] border rounded-md p-4">
            <img
              className="bg-[#f2f2f2] p-5 rounded-md"
              src={product?.image}
              alt=""
            />
            <div className="py-8">
              <p className="text-xl font-semibold ">{product?.name}</p>
              <div className="flex gap-2 py-4">
                <p className="text-xl font-semibold ">
                  €{product?.discountPrice}
                </p>
                <p className="text-xl font-semibold text-[#ababab] line-through">
                  €{product?.price}
                </p>
                <p className="text-xl font-semibold text-[#B92E2E]">
                  {product?.discount}% OFF
                </p>
              </div>
              <p className="text-xs font-semibold text-[#838383]">
                {product?.description}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="h-10 bg-black text-white w-full rounded-md"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
