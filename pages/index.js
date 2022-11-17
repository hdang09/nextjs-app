import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Order product</button>
      <Link href="/users">
        <a>View all users</a>
      </Link>
    </>
  );
};

Home.propTypes = {};

export default Home;
