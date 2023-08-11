import { useTheme } from "next-themes";
import Footer from "../ui/Footer";
import Navber from "../ui/Navber";

const RootLayout = ({ childred }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Navber></Navber>
      </div>

      <div className="min-h-[100vh]">{childred}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
