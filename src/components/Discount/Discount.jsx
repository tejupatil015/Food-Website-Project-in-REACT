import React from "react";
import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-green-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="max-w-[650px]">
          <span className="text-orange-500 font-bold text-3xl md:text-5xl">
            20% OFF
          </span>

          <h3 className="text-4xl md:text-6xl font-bold text-zinc-800 mt-4 leading-tight">
            First Order Discount!
          </h3>

          <p className="text-zinc-600 text-lg mt-6 mb-8">
            Enjoy an exclusive first-order discount on our Mizu website.
            Shop fresh fruits, vegetables, dairy products and more with
            fast delivery and guaranteed quality.
          </p>

          <Button content="Get Discount" />
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={FreshFruits}
            alt="Fresh Fruits"
            className="w-[280px] md:w-[450px] lg:w-[550px] object-contain hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Discount;