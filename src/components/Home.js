import React, { useState, useEffect } from "react";
import { getData } from "../features/productSlice";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import Container from "./Container";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Navbar />
      <Container>Home</Container>
    </div>
  );
};

export default Home;
