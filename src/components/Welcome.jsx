import About from "./About"; // Desktop view
import VideoBackground from "./VideoBackground"; // Mobile view

const Welcome = () => {
  return (
    <div>
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <VideoBackground />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <About />
      </div>
    </div>
  );
};

export default Welcome;
