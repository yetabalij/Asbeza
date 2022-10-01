import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import Container from "./Container";

const History = () => {
  const history = useSelector((state) => state.history.historyItems);
  console.log(history);
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto flex flex-col mt-4">
        <h1 className="font-medium text-2xl mb-4">History</h1>
        {history.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full shadow-md sm:flex flex-row gap-8 items-center mb-4"
            >
              <img src={item?.image} className="sm:w-[25%]" />
              <div>
                <p className="font-medium">{`Name: ${item?.name}`}</p>
                <p className="font-medium">{`Total Quantity: ${item?.totalQuantity}`}</p>
                <p className="font-medium">{`Single Price: $${item?.price}`}</p>
                <p className="font-medium">{`Total Price: $${item?.totalPrice}`}</p>
              </div>
              <div className="flex flex-col items-start">
                <button className="bg-[#9fcf37] text-white px-2 py-2 mb-2 w-[200px] rounded-sm">
                  Delete
                </button>
                <button className="bg-[#9fcf37] text-white px-2 py-2 w-[200px] rounded-sm">
                  Place Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
