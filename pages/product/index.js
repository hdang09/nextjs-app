import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Product = (props) => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {[...Array(10).keys()].map((item) => (
          <li key={item}>
            <Link href={`/product/${item}`}>
              <a>Product {item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Product.propTypes = {};

export default Product;
