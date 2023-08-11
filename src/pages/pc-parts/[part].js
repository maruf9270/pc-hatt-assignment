import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PcComponents = () => {
  return <div></div>;
};

export default PcComponents;
PcComponents.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
