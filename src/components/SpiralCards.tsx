"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./SpiralCards.module.css";
import ProductModal from "./ProductModal";

interface CardData {
  id: number;
  type: string;
  title: string;
  sub: string;
  img?: string;
  color?: string;
  category?: string;
  description?: string;
  tags?: string[];
}

export type Card = CardData;

interface SpiralCardsProps {
  startIntro?: boolean;
}

const DUMMY_CARDS: CardData[] = [
  { id: 1, type: "image", title: "Ads & Creative", sub: "View Details", img: "/ads-creative.png", color: "#E53935", category: "Marketing", description: "Boost your brand visibility with our tailored ads and creative solutions.", tags: ["Advertising", "Creative", "Campaigns"] },
  { id: 2, type: "image", title: "Brand Identity", sub: "View Details", img: "/brand-identity1.png", color: "#D84315", category: "Branding", description: "Crafting a unique and memorable identity for your brand.", tags: ["Identity", "Design", "Logo"] },
  { id: 3, type: "image", title: "Brand Strategy", sub: "View Details", img: "/brand-identity.png", color: "#39FF14", category: "Branding", description: "Develop a solid foundation and strategy for long-term brand success.", tags: ["Strategy", "Positioning", "Growth"] },
  { id: 4, type: "image", title: "Business Growth", sub: "View Details", img: "/businessgroth.png", color: "#5E35B1", category: "Business", description: "Accelerate your business growth with data-driven insights and strategies.", tags: ["Growth", "Analytics", "Scaling"] },
  { id: 5, type: "image", title: "Creative", sub: "View Details", img: "/creative.png", color: "#D32F2F", category: "Design", description: "Engaging creative designs that captivate your audience.", tags: ["Design", "Art Direction", "Visuals"] },
  { id: 6, type: "image", title: "Creative Production", sub: "View Details", img: "/creativeproduction.png", color: "#FF9800", category: "Production", description: "High-quality production services for your creative assets.", tags: ["Production", "Video", "Media"] },
  { id: 7, type: "image", title: "Digital Marketing", sub: "View Details", img: "/digital-marketing.png", color: "#FF1744", category: "Marketing", description: "Comprehensive digital marketing strategies to reach your target audience.", tags: ["SEO", "Social Media", "PPC"] },
  { id: 8, type: "image", title: "Development", sub: "View Details", img: "/developer.png", color: "#FF6D00", category: "Technology", description: "Robust and scalable development solutions for web and mobile apps.", tags: ["Web", "Mobile", "Software"] },
  { id: 9, type: "image", title: "Fix Your Brand", sub: "View Details", img: "/fix-your-brand.png", color: "#a461d8", category: "Consulting", description: "Expert consulting to fix and elevate your current brand presence.", tags: ["Audit", "Revamp", "Consulting"] },
  { id: 10, type: "image", title: "New Ideas", sub: "View Details", img: "/new-idea.png", color: "#FF6D00", category: "Innovation", description: "Innovative concepts and ideas to keep you ahead of the curve.", tags: ["Innovation", "Concepts", "Future"] },
  { id: 11, type: "image", title: "Strategy", sub: "View Details", img: "/strategy.png", color: "#FFB300", category: "Planning", description: "Strategic planning to align your business goals with actionable steps.", tags: ["Planning", "Execution", "Roadmap"] },
  { id: 12, type: "image", title: "Where Creativity Meets", sub: "View Details", img: "/where-creativity-meets.png", color: "#FF5722", category: "Vision", description: "The intersection of creativity and technology for impactful results.", tags: ["Vision", "Impact", "Synergy"] },
];

const N = DUMMY_CARDS.length;

export default function SpiralCards({ startIntro = false }: SpiralCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardElsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  // ─── Silky Smooth Physics & Momentum Engine ───
  const progress = useRef(0);
  const targetProgress = useRef(0);
  const velocity = useRef(0);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const autoPlay = useRef(true);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);
  const hasAnimatedIn = useRef(false);
  const isVisible = useRef(true);

  // Intro reveal animator object driven by GSAP
  const introAnim = useRef({ y: 140, scale: 0.75, opacity: 0 });

  // Dynamic Spacing based on viewport width
  const getCardSpacing = () => {
    if (typeof window === "undefined") return 360;
    if (window.innerWidth < 768) return 240;
    if (window.innerWidth < 1100) return 300;
    return 370;
  };

  // Initial layout & RAF loop setup
  useEffect(() => {
    let raf: number;
    const cards = cardElsRef.current.filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const frame = () => {
      if (!isVisible.current) {
        raf = requestAnimationFrame(frame);
        return;
      }

      const spacing = getCardSpacing();

      if (autoPlay.current && !isDragging.current) {
        // Continuous lively cinematic auto-glide
        targetProgress.current += 0.0055;
      } else if (!isDragging.current && Math.abs(velocity.current) > 0.0001) {
        // Momentum inertial glide after flick/drag
        targetProgress.current += velocity.current;
        velocity.current *= 0.94; // Friction damping
      }

      // Snappy, Butter-Smooth Exponential Lerp
      progress.current += (targetProgress.current - progress.current) * 0.14;

      const currentIntro = introAnim.current;

      cards.forEach((el, i) => {
        if (!el) return;

        let offset = (i - (progress.current % N));
        while (offset > N / 2) offset -= N;
        while (offset < -N / 2) offset += N;

        const absOffset = Math.abs(offset);
        
        // 3D Amphitheater Mathematics (Consistent scale curve without post-load jump)
        const x = offset * spacing;
        const y = currentIntro.y;
        const z = -Math.pow(absOffset, 1.25) * 60;
        const rotY = offset * 8.0;
        
        // Base scale: prominent center card with smooth geometric falloff
        const baseScale = Math.max(0.74, 1.02 - absOffset * 0.07);
        const finalScale = baseScale * currentIntro.scale;
        const opacity = Math.max(0, 1 - Math.pow(absOffset / 3.8, 2)) * currentIntro.opacity;
        const zIndex = Math.round(100 - absOffset * 10);

        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) scale(${finalScale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(zIndex);
        el.style.pointerEvents = absOffset < 3.2 && currentIntro.opacity > 0.5 ? "auto" : "none";
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  // Trigger entrance smoothly in sync with preloader completion
  useEffect(() => {
    if (startIntro && !hasAnimatedIn.current) {
      hasAnimatedIn.current = true;

      // Seamlessly animate the intro multipliers — ZERO scale pop or jumping
      gsap.to(introAnim.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.1
      });
    }
  }, [startIntro]);

  // High-Precision Pointer Drag Handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    autoPlay.current = false;
    velocity.current = 0;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);

    dragStart.current = { x: e.clientX, y: e.clientY };
    lastX.current = e.clientX;
    lastTime.current = performance.now();

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastTime.current);
    const dx = e.clientX - lastX.current;

    lastX.current = e.clientX;
    lastTime.current = now;

    const spacing = getCardSpacing();
    const progressDelta = -dx / spacing;

    targetProgress.current += progressDelta;
    velocity.current = progressDelta * (16 / dt) * 0.85;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;

    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }

    // Resume auto-drift after 3s of idle
    resumeTimer.current = setTimeout(() => {
      if (!isDragging.current) autoPlay.current = true;
    }, 3000);
  };

  // Wheel Scroll support with Snappy Lerp Smoothing
  const onWheel = (e: React.WheelEvent) => {
    autoPlay.current = false;
    velocity.current = 0;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const clampedDelta = Math.max(-100, Math.min(100, delta));
    targetProgress.current += clampedDelta * 0.0018;

    resumeTimer.current = setTimeout(() => {
      if (!isDragging.current) autoPlay.current = true;
    }, 2500);
  };

  const activeCard = DUMMY_CARDS.find((c) => c.id === activeCardId);

  return (
    <>
      <div 
        className={styles.container}
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
      >
        {/* Ambient Floor Glow */}
        <div className={styles.floorGlow} />
        
        {/* 3D Curved Amphitheater Stage */}
        <div className={styles.panoramicStage}>
          {DUMMY_CARDS.map((card, i) => (
            <div 
              key={card.id}
              ref={(el) => { cardElsRef.current[i] = el; }}
              className={styles.card}
              onClick={(e) => {
                const dx = Math.abs(e.clientX - dragStart.current.x);
                const dy = Math.abs(e.clientY - dragStart.current.y);
                if (dx < 6 && dy < 6) {
                  setActiveCardId(card.id);
                }
              }}
            >
              <Image 
                src={card.img!} 
                alt={card.title} 
                className={styles.cardImageBg} 
                draggable={false} 
                fill 
                priority={i < 4}
                sizes="(max-width: 768px) 240px, (max-width: 1200px) 300px, 340px" 
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardGlassBorder} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeCard && (
        <ProductModal card={activeCard} onClose={() => setActiveCardId(null)} />
      )}
    </>
  );
}
