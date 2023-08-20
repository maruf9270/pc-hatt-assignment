import { RootLayout } from "@/components/Layout/RootLayout";
import ProductCard from "@/components/Products/ProductCard";

const PcComponents = (param) => {
  console.log(param);
  return (
    <div>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {param.part.data.map((part) => (
          <ProductCard key={part._id} part={{ data: part }} />
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
  const res = await fetch("http://localhost:3000/api/all-parts");
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
  console.log(context);
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/single-category/${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      part: data,
    },
  };
};
