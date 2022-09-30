import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = (props) => {
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
        <div className="flex gap-3">
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
          <button className="bg-[#046d4c] text-white px-2 py-1">
            Add To History
          </button>
          <p>Price:</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
