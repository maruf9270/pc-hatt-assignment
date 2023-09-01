import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function MyApp({ Component, pageProps, session }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToastContainer />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
