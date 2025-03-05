import { Canvas } from "@react-three/fiber";
import { animate } from "motion";
import { useMotionValue } from "motion/react";
import { useState } from "react";
import RevealImage from "./components/RevealImage";

function App() {
  const [isRevealed, setIsRevealed] = useState(true);
  const revealProgress = useMotionValue(1);

  const handleReveal = () => {
    animate(revealProgress, isRevealed ? 0 : 1, {
      duration: 1.5,
      ease: "easeInOut",
    });
    setIsRevealed(!isRevealed);
  };

  return (
      <Canvas
        className="z-10"
        onClick={handleReveal}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: false ? "#000" : "#F9FAF7",
        }}
      >
        <RevealImage
          imageTexture="./img/textureupscaled.webp"
          revealProgress={revealProgress}
          isFullScreen={false}
        />
      </Canvas>
  );
}

export default App;
