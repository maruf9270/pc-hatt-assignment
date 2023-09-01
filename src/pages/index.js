import { RootLayout } from "@/components/Layout/RootLayout";
import ProductCard from "@/components/Products/ProductCard";
import Hero from "@/components/ui/Hero";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home({ parts }) {
  console.log(parts);
  let i = 0;
  return (
    <>
      <div className="my-5">
        <Hero></Hero>
      </div>
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
  const res = await fetch(
    "https://book-cotalog-backend.vercel.app/api/v1/parts/featured"
  );
  const data = await res.json();
  return {
    props: {
      parts: data,
    },
  };
};
