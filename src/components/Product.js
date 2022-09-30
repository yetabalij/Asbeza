import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Rating from "react-rating";
import { addHistory } from "./../features/historySlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const totalPrice = quantity * props.product.price;
  const dispatch = useDispatch();

  const ItemToHistory = {
    ...props.product,
    totalQuantity: quantity,
    totalPrice: totalPrice,
  };

  const handleAddToHistory = () => {
    dispatch(addHistory(ItemToHistory));
    setAlert(true);
    setMessage("Item Added to History.");
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
                  <option value={i + 1} key={i}>
                    {i + 1}
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
        {alert && (
          <p className="bg-[#046d4c] mt-2 text-white w-[80%] mx-auto text-center">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
