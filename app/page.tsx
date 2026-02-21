import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Main from "@/sections/Main";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <div>
        <Main />
        <Footer />
      </div>
    </div>
  );
}
