import Categories from "./ui/Categories";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto p-4 flex flex-grow">
        <Categories />
      </main>
      <Footer />
    </>
  );
}
