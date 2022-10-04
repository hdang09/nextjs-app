import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Home = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Order product</button>
    </>
  );
};

Home.propTypes = {};

export default Home;
