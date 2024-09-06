import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
  const carts = [
    { name: "Gaming Chair", image: "gaming.png", price: 299 },
    { name: "Gaming Chair", image: "gaming.png", price: 299 },
    { name: "Gaming Chair", image: "gaming.png", price: 299 },
  ];
  return (
    <div className="max-w-7xl mx-auto pt-5 flex gap-x-20">
      <div>
        <div>
          <h3 className="text-2xl font-semibold ">An overview of your order</h3>
        </div>
        <div className="bg-[#fafafa] rounded-md mt-10 mb-24">
          {carts.map(({ image, name, price }) => (
            <div className="flex justify-between w-[840px] h-40 border-b py-6 px-6">
              <div className="flex">
                <div className="h-11 w-[72px] border rounded-md flex justify-between items-center mt-7 mr-2 px-3 py-3">
                  <button className="text-[#cfcfcf]">-</button>
                  <p>1</p>
                  <button className="text-[#cfcfcf]">+</button>
                </div>
                <img className="size-[88px]" src={image} alt="" />
                <p className="font-bold pl-4">{name}</p>
              </div>
              <div className="relative">
                <IoCloseOutline className="size-5 text-[#939393]" />
                <p className="absolute bottom-0 right-1 text-xl font-semibold">
                  €{price}.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div>
          <h3 className="text-2xl font-semibold ">Oder details</h3>
        </div>

        <div className="px-6 w-96 bg-[#fafafa] border rounded-md mt-10">
          <div className="flex justify-between py-3">
            <p className="text-[#656565] text-xl">Subtotal</p>
            <p className="text-xl font-medium text-[#656565]">€ 1071.00</p>
          </div>
          <div className="flex justify-between py-3">
            <p className="text-[#656565] text-xl">Shipping</p>
            <p className="text-xl font-medium text-[#656565]">Free</p>
          </div>
          <div className="flex justify-between py-3">
            <p className="text-[#656565] text-xl">Estimated Tax</p>
            <p className="text-xl font-medium text-[#656565]">€ -</p>
          </div>

          <hr />  

          <div className="flex justify-between py-5">
            <p className="text-[#656565] text-2xl font-semibold">Total</p>
            <p className="text-2xl font-semibold text-[#0e0e0e]">€ 1071.00</p>
          </div>
        </div>

        <button className="h-14 w-96 bg-black text-white font-medium rounded-md mt-6">Go to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
