"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./EnterFixitSection.module.css";

export default function EnterFixitSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Zoom finishes earlier (at 0.6 scroll) to leave time for the text to fade in
  const centerScale = useTransform(
    scrollYProgress, 
    [0.0, 0.12, 0.24, 0.36, 0.48, 0.6, 1.0], 
    [0.5, 1.44, 4.16, 12.0, 34.6, 150, 150]
  );
  
  const centerOpacity = useTransform(
    scrollYProgress, 
    [0.0, 0.12, 0.24, 0.36, 0.48, 0.6, 1.0], 
    [0, 0.2, 0.5, 0.8, 1, 1, 1]
  );

  const stickyBgColor = useTransform(
    scrollYProgress,
    [0.55, 0.6, 1.0],
    ["#030305", "#07070d", "#07070d"]
  );

  const starsOpacity = useTransform(scrollYProgress, [0.55, 0.6, 1.0], [1, 0.2, 0.2]);

  // Top text moves UP, Bottom text moves DOWN
  const topLeftY = useTransform(scrollYProgress, [0.0, 0.2, 1.0], ["0%", "-300%", "-300%"]);
  const bottomRightY = useTransform(scrollYProgress, [0.0, 0.2, 1.0], ["0%", "300%", "300%"]);
  
  const cornerOpacity = useTransform(scrollYProgress, [0.0, 0.1, 0.2, 1.0], [1, 1, 0, 0]);

  // SEQUENTIAL FLIP ANIMATIONS
  const p1Opacity = useTransform(scrollYProgress, [0.60, 0.63, 0.69, 0.72], [0, 1, 1, 0]);
  const p1RotateX = useTransform(scrollYProgress, [0.60, 0.63, 0.69, 0.72], [90, 0, 0, -90]);

  const p2Opacity = useTransform(scrollYProgress, [0.72, 0.75, 0.81, 0.84], [0, 1, 1, 0]);
  const p2RotateX = useTransform(scrollYProgress, [0.72, 0.75, 0.81, 0.84], [90, 0, 0, -90]);

  const p3Opacity = useTransform(scrollYProgress, [0.84, 0.87, 1.0], [0, 1, 1]);
  const p3RotateX = useTransform(scrollYProgress, [0.84, 0.87, 1.0], [90, 0, 0]);

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.div className={styles.sticky} style={{ backgroundColor: stickyBgColor }}>
        
        {/* Background stars */}
        <motion.div className={styles.stars} style={{ opacity: starsOpacity }} />

        {/* Top Left Text */}
        <motion.div 
          className={styles.topLeft} 
          style={{ 
            opacity: cornerOpacity,
            y: topLeftY,
          }}
        >
          <span className={styles.topText}>SO WE FIX</span>
          <span className={styles.brandText}>YOUR BRAND</span>
        </motion.div>

        {/* Bottom Right Text */}
        <motion.div 
          className={styles.bottomRight} 
          style={{ 
            opacity: cornerOpacity,
            y: bottomRightY,
          }}
        >
          AS IT SHOULD BE
        </motion.div>

        {/* Center Zooming Text */}
        <motion.div 
          className={styles.centerTextContainer}
          style={{
            scale: centerScale,
            opacity: centerOpacity,
            transformOrigin: "49.8% 22.5%", 
          }}
        >
          <div className={styles.textLine}>ENTER</div>
          <div className={styles.textLine}>FIXIT</div>
        </motion.div>

        {/* Description that flips in sequentially at the end */}
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
              BUILDING <span className={styles.altColor}>BRANDS</span> THAT<br/>
              STAND THE <span className={styles.altFont}>TEST OF TIME.</span>
            </motion.div>
            
            <motion.div style={{ opacity: p2Opacity, rotateX: p2RotateX, position: "absolute" }}>
              THROUGH <span className={styles.altFont}>STRATEGIC DESIGN,</span><br/>
              <span className={styles.altColor}>DIGITAL INNOVATION,</span> AND
            </motion.div>
            
            <motion.div style={{ opacity: p3Opacity, rotateX: p3RotateX, position: "absolute" }}>
              CREATIVE STORYTELLING, WE<br/>
              FIX WHAT&apos;S <span className={styles.altColor}>BROKEN</span> AND<br/>
              <span className={styles.altFont}>ELEVATE</span> WHAT WORKS.
            </motion.div>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}
