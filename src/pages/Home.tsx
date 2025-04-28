import HeroSection from "@/components/HeroSection";
import Search from "@/components/Search";
import Navbar from "@/components/shared/Navbar";
import NavLinksBar from "@/components/shared/NavLinksBar";
// import AutoplayCarousel from "@/components/AutoplayCarousel";

const Home = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <Navbar />
      <Search />
      <NavLinksBar />
      {/* <AutoplayCarousel /> */}
      <HeroSection
        headline="Connect with Expert Liver Physicians"
        subheadline="Submit your condition and receive personalized treatment plans from trusted specialists."
        ctaText="Get Started"
      />
    </div>
  );
};

export default Home;
