// "use client";
import { RootLayout } from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const SinglePart = (param) => {
  console.log(param);
  const rating = param.part.data.indivudualRating;
  const averageRating = param.part.data.averageRating;
  return (
    <>
      <div className="flex flex-wrap my-5 ">
        <div className="lg:w-[40%] md:w-[100%] flex items-center justify-center p-4">
          <Image
            src={param.part.data.image}
            height={500}
            width={500}
            alt="Pc components"
          ></Image>
        </div>
        <div className="lg:w-[60%] md:w-[100%]">
          <div>
            {" "}
            <h3 className="text-2xl text-blue-500">{param.part.data.name}</h3>
          </div>
          <div className="my-4 flex flex-wrap">
            <div className="badge badge-outline py-5 mx-5 my-2">
              {" "}
              <span className="font-bold my-3">Category:</span>{" "}
              {param.part.data.categody}
            </div>
            <div className="badge badge-outline py-5 mx-5 my-2">
              {" "}
              <span className="font-bold my-3">Status: </span>{" "}
              {param.part.data.status}
            </div>
            <div className="badge badge-outline py-5 mx-5 my-2">
              {" "}
              <span className="font-bold my-3">Price:</span>{" "}
              {param.part.data.price}
            </div>
          </div>
          <h2 className="text-xl font-bold">Key Features:</h2>
          {param.part.data.features.map((feature) => (
            <>
              <div className="my-1">
                <span className="font-bold" key={feature.name}>
                  {feature.name}:
                </span>{" "}
                {feature.detail} <br></br>
              </div>
            </>
          ))}
          <div>
            <span className="font-bold">Indivisuals Rating: </span>
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
            </div>{" "}
            <br></br>
            <span className="font-bold">Average Rating: </span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(averageRating) == 1}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(averageRating) == 2}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(averageRating) == 3}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(averageRating) == 4}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.floor(averageRating) == 5}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f4f8] p-5 rounded-lg">
        <div className="my-6">
          <h3 className="text-xl font-bold">Description:</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {param.part.data.description}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Reviews:</h3>
          {/* Revieww */}
          <div class="space-y-4 mt-2">
            {/* <!-- Sample Review 1 --> */}
            {param.part.data.reviews.length > 0 ? (
              param.part.data.reviews.map((review) => (
                <>
                  {" "}
                  <div class="bg-white p-4 rounded-lg shadow-md">
                    <div class="text-gray-600">{review.detail}</div>
                    <div class="text-sm text-gray-400">- {review.name}</div>
                  </div>
                </>
              ))
            ) : (
              <>
                <div class="bg-white p-4 rounded-lg shadow-md">
                  No Reviews found
                </div>
              </>
            )}

            {/* <!-- Add more reviews here --> */}
          </div>

          {/* <!-- New Review Box --> */}
          <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Write a Review</h2>
            <form>
              <div class="mb-4">
                <label
                  for="review"
                  class="block text-sm font-medium text-gray-600"
                >
                  Your Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <textarea
                  type="text"
                  id="name"
                  name="name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePart;
SinglePart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/all-parts");
  const data = await res.json();

  const paths = data.data.map((part) => ({
    params: { id: part._id },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  console.log(context);
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/single/${params.id}`);
  const data = await res.json();

  return {
    props: {
      part: data,
    },
  };
};
