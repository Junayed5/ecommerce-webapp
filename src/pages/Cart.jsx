import React from "react";

const Cart = () => {
  const carts = [
    { name: "Gaming Chair", image: "gaming.png", price: 299.0 },
    { name: "Gaming Chair", image: "gaming.png", price: 299.0 },
    { name: "Gaming Chair", image: "gaming.png", price: 299.0 },
  ];
  return (
    <div>
      <div>
        {carts.map(({ image, name, price }) => (
          <div className="flex ">
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
