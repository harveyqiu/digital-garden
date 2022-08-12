import "./_app.css";
import { DefaultSeo } from "next-seo";
import Navbar from "../componentsv2/Navbar/index.js";
import Footer from "../componentsv2/Footer";

function MyApp({ Component, pageProps, router }) {
  // Don't include navbar and footer when generating open graph images
  if (router.pathname === "/og-image") {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <container>
        <DefaultSeo
          title="Harvey Qiu's digital garden"
          description="Harvey's digital garden"
          openGraph={{
            type: "website",
            locale: "en_GB",
            url: "https://garden.harveyqiu.xyz/",
            site_name: "Harvey Qiu",
          }}
        />
        <Navbar />
        <Component {...pageProps} key={router.route} />
        <Footer />
      </container>
    </>
  );
}

export default MyApp;
