"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Preloader.module.css";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const doorLeftRef = useRef<HTMLDivElement>(null);
  const doorRightRef = useRef<HTMLDivElement>(null);
  
  // Letters
  const letterFRef = useRef<HTMLSpanElement>(null);
  const letterI1Ref = useRef<HTMLSpanElement>(null);
  const letterI2Ref = useRef<HTMLSpanElement>(null);
  const letterTRef = useRef<HTMLSpanElement>(null);

  // X Brand Mark & 4 Exploding Shards
  const xIconStageRef = useRef<HTMLDivElement>(null);
  const shardTLRef = useRef<SVGGElement>(null);
  const shardTRRef = useRef<SVGGElement>(null);
  const shardBLRef = useRef<SVGGElement>(null);
  const shardBRRef = useRef<SVGGElement>(null);
  const energyCoreRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Safety check to ensure DOM elements exist
    if (
      !containerRef.current ||
      !doorLeftRef.current ||
      !doorRightRef.current ||
      !letterFRef.current ||
      !letterI1Ref.current ||
      !letterI2Ref.current ||
      !letterTRef.current ||
      !xIconStageRef.current ||
      !shardTLRef.current ||
      !shardTRRef.current ||
      !shardBLRef.current ||
      !shardBRRef.current
    ) {
      return;
    }

    // Lock scroll during door preloader animation
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.1,
        onComplete: () => {
          document.body.style.overflow = "";
          setIsLoaded(true);
          if (onComplete) onComplete();
        }
      });

      // ─── Phase 1: Reveal Wordmark & X Brand Icon in Center ───
      gsap.set([letterFRef.current, letterI1Ref.current, letterI2Ref.current, letterTRef.current], {
        opacity: 0,
        y: 25,
        scale: 0.9
      });
      gsap.set(xIconStageRef.current, {
        opacity: 0,
        scale: 0.75,
        rotation: -10
      });
      gsap.set(energyCoreRef.current, { opacity: 0, scale: 0.5 });

      tl.to([letterFRef.current, letterI1Ref.current, letterI2Ref.current, letterTRef.current], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out"
      })
      .to(
        xIconStageRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "back.out(1.6)"
        },
        "-=0.7"
      )
      .to(
        energyCoreRef.current,
        {
          opacity: 0.8,
          scale: 1.2,
          duration: 0.5,
          ease: "power2.out"
        },
        "-=0.4"
      )
      // Brief luxury brand hold
      .to({}, { duration: 0.45 })

      // ─── Phase 2: Grand Door Opening & 4-Way X Icon Shard Burst ───
      // 1. Energy Flash in the center
      .to(energyCoreRef.current, {
        scale: 6,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
      }, "openDoors")

      // 2. The 4 Shards of X Explode Outwards across the 4 corners of the screen
      .to(shardTLRef.current, {
        x: -window.innerWidth * 0.85,
        y: -window.innerHeight * 0.85,
        scale: 3,
        rotation: -45,
        opacity: 0,
        duration: 1.25,
        ease: "power4.in"
      }, "openDoors")
      .to(shardTRRef.current, {
        x: window.innerWidth * 0.85,
        y: -window.innerHeight * 0.85,
        scale: 3,
        rotation: 45,
        opacity: 0,
        duration: 1.25,
        ease: "power4.in"
      }, "openDoors")
      .to(shardBLRef.current, {
        x: -window.innerWidth * 0.85,
        y: window.innerHeight * 0.85,
        scale: 3,
        rotation: 45,
        opacity: 0,
        duration: 1.25,
        ease: "power4.in"
      }, "openDoors")
      .to(shardBRRef.current, {
        x: window.innerWidth * 0.85,
        y: window.innerHeight * 0.85,
        scale: 3,
        rotation: -45,
        opacity: 0,
        duration: 1.25,
        ease: "power4.in"
      }, "openDoors")

      // 3. Left Door slides to the LEFT (carrying FI off screen)
      .to(doorLeftRef.current, {
        xPercent: -100,
        duration: 1.35,
        ease: "power4.inOut"
      }, "openDoors+=0.05")

      // 4. Right Door slides to the RIGHT (carrying IT off screen)
      .to(doorRightRef.current, {
        xPercent: 100,
        duration: 1.35,
        ease: "power4.inOut"
      }, "openDoors+=0.05")

      // 5. Container fade-out at the tail
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.25");

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isLoaded) return null;

  return (
    <div className={styles.preloader} ref={containerRef} aria-hidden="true" suppressHydrationWarning>
      {/* ─── Left Door (Carries "FI" to the left) ─── */}
      <div className={styles.doorLeft} ref={doorLeftRef} suppressHydrationWarning>
        <div className={styles.doorBg} />
        <div className={styles.doorContentLeft}>
          <span ref={letterFRef} className={styles.letter}>F</span>
          <span ref={letterI1Ref} className={styles.letter}>I</span>
        </div>
        {/* Luminous laser seam edge */}
        <div className={styles.doorSeamLeft} />
      </div>

      {/* ─── Right Door (Carries "IT" to the right) ─── */}
      <div className={styles.doorRight} ref={doorRightRef} suppressHydrationWarning>
        <div className={styles.doorBg} />
        <div className={styles.doorContentRight}>
          <span ref={letterI2Ref} className={styles.letter}>I</span>
          <span ref={letterTRef} className={styles.letter}>T</span>
        </div>
        {/* Luminous laser seam edge */}
        <div className={styles.doorSeamRight} />
      </div>

      {/* ─── Center Energy Core (Neon Violet Aurora Flash) ─── */}
      <div className={styles.energyCore} ref={energyCoreRef} suppressHydrationWarning />

      {/* ─── Center Stage: FIXIT Iconic "X" Brand Logo (4-Way Exploding Shards) ─── */}
      <div className={styles.xIconStage} ref={xIconStageRef} suppressHydrationWarning>
        <svg viewBox="0 0 140 140" className={styles.xSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="purpleGradTL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="purpleGradTR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="purpleGradBL" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="purpleGradBR" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <radialGradient id="centerCoreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#a461d8" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="shardGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Top-Left Shard Quadrant (Flies Top-Left ↖) */}
          <g ref={shardTLRef} className={styles.shard} filter="url(#shardGlow)">
            <polygon points="12,12 66,66 22,66 12,56" fill="url(#purpleGradTL)" />
            <polygon points="26,12 66,12 66,52" fill="#2d0b4e" opacity="0.85" />
            <line x1="12" y1="12" x2="66" y2="66" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* 2. Top-Right Shard Quadrant (Flies Top-Right ↗) */}
          <g ref={shardTRRef} className={styles.shard} filter="url(#shardGlow)">
            <polygon points="128,12 74,66 118,66 128,56" fill="url(#purpleGradTR)" />
            <polygon points="114,12 74,12 74,52" fill="#2d0b4e" opacity="0.85" />
            <line x1="128" y1="12" x2="74" y2="66" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* 3. Bottom-Left Shard Quadrant (Flies Bottom-Left ↙) */}
          <g ref={shardBLRef} className={styles.shard} filter="url(#shardGlow)">
            <polygon points="12,128 66,74 22,74 12,84" fill="url(#purpleGradBL)" />
            <polygon points="26,128 66,128 66,88" fill="#2d0b4e" opacity="0.85" />
            <line x1="12" y1="128" x2="66" y2="74" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* 4. Bottom-Right Shard Quadrant (Flies Bottom-Right ↘) */}
          <g ref={shardBRRef} className={styles.shard} filter="url(#shardGlow)">
            <polygon points="128,128 74,74 118,74 128,84" fill="url(#purpleGradBR)" />
            <polygon points="114,128 74,128 74,88" fill="#2d0b4e" opacity="0.85" />
            <line x1="128" y1="128" x2="74" y2="74" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* Central Intersection Diamond */}
          <circle cx="70" cy="70" r="9" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}

// optimized for better readability

// more explicit handling
