import { RootLayout } from "@/components/Layout/RootLayout";
import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

export default function Home({ parts }) {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {parts?.data?.map((part) => {
        return (
          <Link href={`/pc-parts/${part?.data?.categody}`} key={part.name}>
            <ProductCard key={part._id} part={part}></ProductCard>
          </Link>
        );
      })}
    </div>
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
