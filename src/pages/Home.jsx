import { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HealthcareChallenges from "../components/HealthcareChallenges";
import Bottom from "../components/Bottom";
import VisionPageSection from "../components/Vision";

const Home = () => {
  const bottomRef = useRef(null);

  useEffect(() => {
    // Check if URL hash is #contact
    if (window.location.hash === "#contact") {
      // Scroll to Bottom
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // Run once on mount

  return (
    <div>
      <Hero />
      <VisionPageSection />
      <HealthcareChallenges />
      <div ref={bottomRef}>
        <Bottom />
      </div>
    </div>
  );
};

export default Home;
