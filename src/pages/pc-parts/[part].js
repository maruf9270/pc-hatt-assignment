import { RootLayout } from "@/components/Layout/RootLayout";

const PcComponents = () => {
  return <div>jjkjiijij</div>;
};

export default PcComponents;
PcComponents.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
