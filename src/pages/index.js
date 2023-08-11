import { Inter } from "next/font/google";
import RootLayout from "@/components/Layout/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home(data) {
  console.log(data);
  return <main></main>;
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
