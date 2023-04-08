import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "@/styles/Navbar.css";
import "@/styles/anypage.css";
import "@/styles/cards.css";
import "@/styles/articleDetails.css";
import "@/styles/author.css";
import "@/styles/categoryCard.css";
import "@/styles/widgetCard.css";
import "@/styles/carousel.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
