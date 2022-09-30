import React, { useState } from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = (props) => {
  const [quantity, setQuantity] = useState(0);
  const totalPrice = quantity * props.product.price;

  const ItemToHistory = {
    ...props.product,
    totalQuantity: quantity,
    totalPrice: totalPrice,
  };

  const handleAddToHistory = () => {
    console.log(ItemToHistory);
  };

  return (
    <div key={props.key} className="shadow-md">
      <img src={props.product.image} />
      <div className="py-2">
        <h3 className="text-sm font-medium">
          {props.product.name.toUpperCase()}
        </h3>
        <div className="text-orange-500">
          <Rating
            emptySymbol={<AiOutlineStar style={{ fontSize: "1.1rem" }} />}
            fullSymbol={<AiFillStar style={{ fontSize: "1.1rem" }} />}
            start={0}
            stop={5}
            initialRating={props.product?.ratting}
            readonly
          />
        </div>
        <p className="font-medium mb-2">{`Price: $${props.product.price}`}</p>
        <div className="flex gap-1">
          <select
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {Array(props.product?.quantity)
              .fill()
              .map((_, i) => {
                return (
                  <option value={i} key={i}>
                    {i}
                  </option>
                );
              })}
          </select>
          <button
            className="bg-[#9fcf37] text-white px-2 py-1"
            onClick={handleAddToHistory}
          >
            Add To History
          </button>
          <div>
            <p className="font-medium">{`Total: $${totalPrice}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
