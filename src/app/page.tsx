import About from "@/components/About";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="flex flex-col h-full max-w-[1440px] justify-center mx-auto">
      <Banner />
      <About />
    </main>
  );
}
