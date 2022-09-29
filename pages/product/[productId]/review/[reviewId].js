import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Review = (props) => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

Review.propTypes = {};

export default Review;
