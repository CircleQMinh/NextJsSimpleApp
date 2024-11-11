import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/vendor.css";
import Layout from "@/components/mainlayout";
import Head from 'next/head'
export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>My App</title>
        <script src="/js/jquery-3.2.1.min.js"></script>
        <script src="/js/modernizr.js"></script>
        <script src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.js"></script>
 
      </Head>

      <Layout suppressHydrationWarning>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
