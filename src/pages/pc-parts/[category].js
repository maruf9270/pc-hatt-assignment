import { RootLayout } from "@/components/Layout/RootLayout";
import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

const PcComponents = (param) => {
  console.log(param);
  return (
    <div>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {param.part.data.map((part) => (
          <Link href={`/single-part/${part?._id}`} key={part._id}>
            <ProductCard key={part.name} part={{ data: part }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PcComponents;
PcComponents.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://book-cotalog-backend.vercel.app/api/v1/parts"
  );
  const data = await res.json();

  const paths = data.data.map((part) => ({
    params: { category: part.categody },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://book-cotalog-backend.vercel.app/api/v1/parts/category/${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      part: data,
    },
  };
};
