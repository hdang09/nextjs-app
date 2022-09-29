import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const ProductDetails = (props) => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Details for product {productId}</h1>;
};

ProductDetails.propTypes = {};

export default ProductDetails;
