import React, { useState, useEffect } from "react";
import { getData } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar";
import Container from "./Container";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [loadin, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getData());
    setLoading(false);
  }, []);
  return (
    <div>
      <Navbar />
      {loadin ? (
        <Container>
          <h1>...Loading</h1>
        </Container>
      ) : (
        <Container>
          {products.map((product) => (
            <div key={product?._id}>
              <h1>{product?.name}</h1>
            </div>
          ))}
        </Container>
      )}
    </div>
  );
};

export default Home;
