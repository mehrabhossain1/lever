import HeroSection from "@/components/HeroSection";
import { Footer } from "@/components/shared/Footer";
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
            <Footer />
        </div>
    );
};

export default Home;
