import { RootLayout } from "../../components/Layout/RootLayout";
import React from "react";

const PcBuilder = () => {
  return <div>This is pc builder page</div>;
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
