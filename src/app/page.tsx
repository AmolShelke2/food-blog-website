import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <main className="flex flex-col h-full max-w-[1440px] justify-center mx-auto">
      <Banner />
      <About />
      <LatestArticles />
      <Footer />
    </main>
  );
}
