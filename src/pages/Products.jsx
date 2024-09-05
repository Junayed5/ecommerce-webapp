import React from "react";

const Products = () => {
  const products = [
    {
      name: "Recliner Chair Wood",
      image: "Image.png",
      discountPrice: 299.0,
      price: 350.0,
      discount: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?",
    },
    {
      name: "Recliner Chair Wood",
      image: "Image.png",
      discountPrice: 299.0,
      price: 350.0,
      discount: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?",
    },
    {
      name: "Recliner Chair Wood",
      image: "Image.png",
      discountPrice: 299.0,
      price: 350.0,
      discount: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?",
    },
    {
      name: "Recliner Chair Wood",
      image: "Image.png",
      discountPrice: 299.0,
      price: 350.0,
      discount: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?",
    },
    {
      name: "Recliner Chair Wood",
      image: "Image.png",
      discountPrice: 299.0,
      price: 350.0,
      discount: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?",
    },
    {
      name: "Recliner Chair Wood",
      image: "Image.png",
      discountPrice: 299.0,
      price: 350.0,
      discount: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex mt-20 mb-16">
      <div className="border-r w-fit pr-8">
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
        {products.map(
          ({ name, image, price, discount, description, discountPrice }) => (
            <div className="h-[484px] w-[277px] border rounded-md p-4">
              <img src={image} alt="" />
              <div className="py-8">
                <p className="text-xl font-semibold ">{name}</p>
                <div className="flex gap-2 py-4">
                  <p className="text-xl font-semibold ">€{discountPrice}</p>
                  <p className="text-xl font-semibold text-[#ababab] line-through">
                    €{price}
                  </p>
                  <p className="text-xl font-semibold text-[#B92E2E]">
                    {discount}% OFF
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#838383]">
                  {description}
                </p>
              </div>

              <button className="h-10 bg-black text-white w-full rounded-md">Add To Cart</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
