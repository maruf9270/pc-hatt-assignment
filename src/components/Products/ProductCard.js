import Image from "next/image";
import React from "react";

const ProductCard = (data) => {
  console.log(data.part.data);
  const { image, name, categody, price, status, averageRating } =
    data.part.data;
  const rating = Number(averageRating);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={image}
            height={100}
            width={200}
            className="rounded-xl"
            alt="Pc components"
          ></Image>
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <div>
            <span className="font-bold ">Category:</span> {categody} <br />
            <span className="font-bold">Price: </span>
            {price} <br />
            <span className="font-bold">Status:</span>
            {status == "in-stock" ? (
              <>
                <span className="text-green-500 font-bold"> {status}</span>
              </>
            ) : (
              <>
                <span className="text-red-800">{status}</span>
              </>
            )}{" "}
            <br />
            <span className="font-bold">Rating: </span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(rating) == 1}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(rating) == 2}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(rating) == 3}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(rating) == 4}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(rating) == 5}
              />
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
