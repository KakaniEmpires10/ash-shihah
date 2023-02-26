import "/styles/globals.css";
import { PT_Serif } from "@next/font/google";
import Loading from "components/Loading";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={ptSerif.className}>
      <Loading />
      <Component {...pageProps} />
    </main>
  );
}
