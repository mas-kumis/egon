"use client";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
      console.log(product);
    }
    fetchData();
  });
  return (
    <div>
      {product?.map((p) => {
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.body}</p>
          <br />
        </div>;
      })}
    </div>
  );
};

export default Body;
