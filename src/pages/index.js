import { RootLayout } from "@/components/Layout/RootLayout";
import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

export default function Home({ parts }) {
  let i = 0;
  return (
    <>
      <h2 className="font-bold text-2xl">Our Featured Products</h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {parts?.data?.map((part) => {
          return (
            <Link
              href={`/single-part/${part?.data?._id}`}
              key={part?.data?._id}
            >
              <ProductCard key={part?.data?._id} part={part}></ProductCard>
            </Link>
          );
        })}
      </div>
      <h2 className="font-bold text-2xl my-5">Our Featured Categories</h2>
      <div className="flex flex-wrap items-center justify-between ">
        {parts?.data.map((part) => {
          return (
            <div key={part.data.name} className="my-5">
              <Link
                className="px-6 py-5 rounded-lg border border-[#f2f2f2] bg-[#f2f2f2] shadow-md font-bold capitalize"
                href={`/pc-parts/${part.data.categody}`}
              >
                {part.data.categody}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/parts");
  const data = await res.json();
  return {
    props: {
      parts: data,
    },
  };
};
