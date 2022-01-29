import "../styles/globals.css";
import "../styles/postText.css";
import { ToastProvider } from "../services/context/toast";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
