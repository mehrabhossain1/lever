import HeroSection from "@/components/HeroSection";
import MessageFromChairman from "@/components/MessageFromChairman";
import MessageFromTreasurer from "@/components/MessageFromTreasurer";
import PhotoGallery from "@/components/PhotoGallery";
import RecentUpdates from "@/components/RecentUpdates";
// import YouTubeLive from "@/components/YoutubeLive";
// import AutoplayCarousel from "@/components/AutoplayCarousel";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* <AutoplayCarousel /> */}
      <HeroSection
        headline="Connect with Expert Liver Physicians"
        subheadline="Submit your condition and receive personalized treatment plans from trusted specialists."
        ctaText="Get Started"
      />
      <PhotoGallery />
      <RecentUpdates />
      <MessageFromChairman />
      <MessageFromTreasurer />
    </div>
  );
};

export default Home;
