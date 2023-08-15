"use client";
import Footer from "../ui/Footer";
import Navber from "../ui/Navber";

export const RootLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Navber></Navber>
      </div>

      <div className="min-h-[100vh] my-5 max-w-7xl px-3">{children}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
