import { RootLayout } from "@/components/Layout/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SinglePart = (param) => {
  console.log(param);
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
        </div>
      </div>

      <div className="bg-[#f2f4f8]">
        <div>
          <h3 className="text-xl font-bold">Description:</h3>
          <div>{param.part.data.description}</div>
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
    params: { id: part._id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/single/${params.id}`);
  const data = await res.json();

  return {
    props: {
      part: data,
    },
  };
};
