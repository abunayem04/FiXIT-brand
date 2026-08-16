"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ExitFixitSection.module.css";

export default function ExitFixitSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Zoom into the text
  const centerScale = useTransform(
    scrollYProgress, 
    [0.0, 0.12, 0.24, 0.36, 0.48, 0.6, 1.0], 
    [0.2, 1.2, 4.16, 12.0, 34.6, 150, 150]
  );
  
  const centerOpacity = useTransform(
    scrollYProgress, 
    [0.0, 0.1, 0.2, 1.0], 
    [0, 0.5, 1, 1]
  );

  const stickyBgColor = useTransform(
    scrollYProgress,
    [0.55, 0.6, 1.0],
    ["#040407", "#030305", "#030305"]
  );

  const topLeftY = useTransform(scrollYProgress, [0.0, 0.2, 1.0], ["0%", "-300%", "-300%"]);
  const bottomRightY = useTransform(scrollYProgress, [0.0, 0.2, 1.0], ["0%", "300%", "300%"]);
  
  const cornerOpacity = useTransform(scrollYProgress, [0.0, 0.1, 0.2, 1.0], [1, 1, 0, 0]);

  // SEQUENTIAL FLIP ANIMATIONS for concluding text
  const p1Opacity = useTransform(scrollYProgress, [0.60, 0.63, 0.69, 0.72], [0, 1, 1, 0]);
  const p1RotateX = useTransform(scrollYProgress, [0.60, 0.63, 0.69, 0.72], [90, 0, 0, -90]);

  const p2Opacity = useTransform(scrollYProgress, [0.72, 0.75, 0.81, 0.84], [0, 1, 1, 0]);
  const p2RotateX = useTransform(scrollYProgress, [0.72, 0.75, 0.81, 0.84], [90, 0, 0, -90]);

  const p3Opacity = useTransform(scrollYProgress, [0.84, 0.87, 1.0], [0, 1, 1]);
  const p3RotateX = useTransform(scrollYProgress, [0.84, 0.87, 1.0], [90, 0, 0]);

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.div className={styles.sticky} style={{ backgroundColor: stickyBgColor }}>
        
        {/* Top Left Text */}
        <motion.div 
          className={styles.topLeft} 
          style={{ 
            opacity: cornerOpacity,
            y: topLeftY,
          }}
        >
          <span className={styles.topText}>YOUR JOURNEY</span>
          <span className={styles.brandText}>STARTS HERE</span>
        </motion.div>

        {/* Bottom Right Text */}
        <motion.div 
          className={styles.bottomRight} 
          style={{ 
            opacity: cornerOpacity,
            y: bottomRightY,
          }}
        >
          LET&apos;S BUILD IT
        </motion.div>

        {/* Center Zooming Text */}
        <motion.div 
          className={styles.centerTextContainer}
          style={{
            scale: centerScale,
            opacity: centerOpacity,
            transformOrigin: "44.5% 22.5%", 
          }}
        >
          <div className={styles.textLine}>EXIT</div>
          <div className={styles.textLine}>FIXIT</div>
        </motion.div>

        {/* Description that flips in sequentially */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 20,
            pointerEvents: "none",
            perspective: "1000px"
          }}
        >
          <div className={styles.brandDescription}>
            <motion.div style={{ opacity: p1Opacity, rotateX: p1RotateX, position: "absolute" }}>
              READY TO <span className={styles.altFont}>DOMINATE?</span><br/>
              YOUR <span className={styles.altColor}>LEGACY</span> AWAITS.
            </motion.div>
            
            <motion.div style={{ opacity: p2Opacity, rotateX: p2RotateX, position: "absolute" }}>
              WE DON&apos;T JUST <span className={styles.altFont}>BUILD,</span><br/>
              WE <span className={styles.altColor}>REDEFINE.</span>
            </motion.div>
            
            <motion.div style={{ opacity: p3Opacity, rotateX: p3RotateX, position: "absolute" }}>
              STEP INTO THE <span className={styles.altColor}>FUTURE</span><br/>
              AND LET&apos;S <span className={styles.altFont}>CREATE</span><br/>
              SOMETHING <span className={styles.altFont}>EXTRAORDINARY.</span>
            </motion.div>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}

// minor refactor

// updated logic for edge cases
