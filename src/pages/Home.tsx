import AutoplayCarousel from "@/components/AutoplayCarousel";
import Search from "@/components/Search";
import Navbar from "@/components/shared/Navbar";
import NavLinksBar from "@/components/shared/NavLinksBar";

const Home = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <Navbar />
      <Search />
      <NavLinksBar />
      <AutoplayCarousel />
    </div>
  );
};

export default Home;
