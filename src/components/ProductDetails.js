import React from "react";
import { Product } from "./Product";

export const ProductDetails = () => {
  const data = [
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Fancy Product",
      price: [0, "$40.00 - $80.00"],
      fiveStar: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Special Item",
      price: [20.0, "$18.00"],
      fiveStar: true,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Sale Item",
      price: [50.0, "$25.00"],
      fiveStar: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Popular Item",
      price: [0, "$40.00"],
      fiveStar: true,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Sale Item",
      price: [50, "$25.00"],
      fiveStar: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Fancy Product",
      price: [0, "$120.00 - $280.00"],
      fiveStar: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Special Item",
      price: [20, "$18.00"],
      fiveStar: true,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productType: "Popular Item",
      price: [0, "$40.00"],
      fiveStar: true,
    },
  ];

  return (
    <div className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((e) => (
            <Product key={e.id} details={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
