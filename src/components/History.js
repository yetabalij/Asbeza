import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";

const History = () => {
  const history = useSelector((state) => state.history.historyItems);
  return (
    <div>
      <Navbar />
      <div className="w-[80%] lg:w-[60%] mx-auto flex flex-col mt-4">
        <h1 className="font-medium text-2xl mb-4">History</h1>
        {history.length === 0 && (
          <p className="bg-gray-100 shadow-md p-5">No Content to show.</p>
        )}
        {history.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full shadow-md sm:flex flex-row justify-between items-center mb-3"
            >
              <img src={item?.image} className="sm:w-[25%]" />
              <div>
                <p className="font-medium">{`Name: ${item?.name}`}</p>
                <p className="font-medium">{`Total Quantity: ${item?.totalQuantity}`}</p>
                <p className="font-medium">{`Single Price: $${item?.price}`}</p>
                <p className="font-medium">{`Total Price: $${item?.totalPrice}`}</p>
              </div>
              <div className="flex flex-col items-start sm:mr-10">
                <button className="bg-[#9fcf37] text-white px-2 py-2 mb-2 sm:w-[200px] w-full rounded-sm">
                  Delete
                </button>
                <button className="bg-[#9fcf37] text-white px-2 py-2 sm:w-[200px] w-full rounded-sm">
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
