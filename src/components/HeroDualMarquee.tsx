"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./HeroDualMarquee.module.css";
import ProductModal from "./ProductModal";
import type { Card } from "./SpiralCards";

// ─── ROW 1: 12 UNIQUE IMAGES (Excludes all images in ServicesSection) ───
const ROW_1_CARDS: Card[] = [
  {
    id: 101,
    type: "image",
    title: "Tablet Workspace System",
    sub: "UI/UX & Web Platforms",
    img: "/services/webdev_tablet.jpg",
    color: "#06b6d4",
    category: "Development",
    description: "High-performance digital platforms tailored for modern businesses.",
    tags: ["UI/UX", "Web Development", "Responsive"]
  },
  {
    id: 102,
    type: "image",
    title: "Ads & Creative Design",
    sub: "Omnichannel Campaigns",
    img: "/ads-creative.png",
    color: "#E53935",
    category: "Marketing",
    description: "Creative visuals engineered for high engagement and conversion.",
    tags: ["Advertising", "Creative", "Campaigns"]
  },
  {
    id: 103,
    type: "image",
    title: "Strategic Brand Direction",
    sub: "Brand Architecture",
    img: "/brand-identity.png",
    color: "#10b981",
    category: "Branding",
    description: "Crafting distinct visual foundations for global brand positioning.",
    tags: ["Strategy", "Branding", "Direction"]
  },
  {
    id: 104,
    type: "image",
    title: "Identity & Typography Systems",
    sub: "Visual Guidelines",
    img: "/brand-identity1.png",
    color: "#f97316",
    category: "Branding",
    description: "Holistic brand guidelines designed for consistent omnichannel execution.",
    tags: ["Typography", "Guidelines", "Identity"]
  },
  {
    id: 105,
    type: "image",
    title: "Snack Purple Packaging",
    sub: "Art Direction & CPG Packaging",
    img: "/snack purple.jpeg",
    color: "#a855f7",
    category: "Packaging",
    description: "Vibrant and appetizing consumer packaging designed to stand out.",
    tags: ["Packaging", "Art Direction", "CPG"]
  },
  {
    id: 106,
    type: "image",
    title: "Coffee & Double Exposure Art",
    sub: "Creative Photography & Direction",
    img: "/Editing Tricks for Double Exposure Art.jpeg",
    color: "#f59e0b",
    category: "Creative",
    description: "Surreal double exposure artistic direction and lifestyle photography.",
    tags: ["Art", "Photography", "Creative"]
  },
  {
    id: 107,
    type: "image",
    title: "Digital Marketing Ecosystems",
    sub: "Targeted Growth Strategies",
    img: "/digital-marketing.png",
    color: "#ef4444",
    category: "Growth",
    description: "Comprehensive digital growth strategies designed to capture market share.",
    tags: ["Growth", "Marketing", "Scale"]
  },
  {
    id: 108,
    type: "image",
    title: "Developer Systems",
    sub: "Software & Mobile Architecture",
    img: "/developer.png",
    color: "#FF6D00",
    category: "Engineering",
    description: "Modern code solutions engineered for scale and speed.",
    tags: ["Engineering", "Web", "Mobile"]
  },
  {
    id: 109,
    type: "image",
    title: "Girgity Chameleon Brand",
    sub: "Custom Character & Identity",
    img: "/girgity.jpeg",
    color: "#10b981",
    category: "Branding",
    description: "Adaptive identity systems designed to evolve with changing markets.",
    tags: ["Illustration", "Identity", "Character"]
  },
  {
    id: 110,
    type: "image",
    title: "Smart Digital Solutions",
    sub: "Modern Business Platform",
    img: "/Building smart digital solutions for modern businesses ⚡💜.jpeg",
    color: "#8b5cf6",
    category: "Innovation",
    description: "Building intuitive digital products that drive enterprise value.",
    tags: ["Digital", "Innovation", "Business"]
  },
  {
    id: 111,
    type: "image",
    title: "Innovative Concepts",
    sub: "Product Direction",
    img: "/new-idea.png",
    color: "#f59e0b",
    category: "Innovation",
    description: "Transformative concepts that differentiate your product in crowded markets.",
    tags: ["Concept", "Innovation", "Product"]
  },
  {
    id: 112,
    type: "image",
    title: "Fix Your Brand Audit",
    sub: "Strategic Brand Revamp",
    img: "/fix-your-brand.png",
    color: "#a855f7",
    category: "Consulting",
    description: "Comprehensive brand audits and transformative revamps.",
    tags: ["Audit", "Revamp", "Strategy"]
  }
];

// ─── ROW 2: 12 COMPLETELY DIFFERENT UNIQUE IMAGES (Zero overlap with Row 1 & Services) ───
const ROW_2_CARDS: Card[] = [
  {
    id: 201,
    type: "image",
    title: "Luxury Ecommerce Portal",
    sub: "Interactive Web Platform",
    img: "/services/webdev_ecommerce.jpg",
    color: "#f59e0b",
    category: "E-Commerce",
    description: "Bespoke digital shopping experiences with high-touch luxury interactions.",
    tags: ["Ecommerce", "Web", "Luxury"]
  },
  {
    id: 202,
    type: "image",
    title: "Creative Visual Impact",
    sub: "3D Art & Motion Direction",
    img: "/creative.png",
    color: "#D32F2F",
    category: "Art Direction",
    description: "Striking 3D imagery designed to command audience attention instantly.",
    tags: ["3D", "Art", "Visuals"]
  },
  {
    id: 203,
    type: "image",
    title: "Brand Icons & Visual Assets",
    sub: "Custom Vector Systems",
    img: "/services/branding_icons.jpg",
    color: "#10b981",
    category: "Assets",
    description: "Custom icon libraries crafted to reinforce brand identity across every screen.",
    tags: ["Icons", "Vector", "Design System"]
  },
  {
    id: 204,
    type: "image",
    title: "Creative Production Suite",
    sub: "High-End Media Production",
    img: "/creativeproduction.png",
    color: "#f97316",
    category: "Production",
    description: "Full-scale production for commercials, photography, and brand media.",
    tags: ["Production", "Media", "Studio"]
  },
  {
    id: 205,
    type: "image",
    title: "Cyberpunk Robot Tech Poster",
    sub: "Minimal Tech Art Aesthetic",
    img: "/Futuristic AI Robot Poster Design – Minimal Cyberpunk Tech Aesthetic.jpeg",
    color: "#06b6d4",
    category: "Poster",
    description: "Futuristic visual storytelling for AI and robotics brands.",
    tags: ["Cyberpunk", "AI", "Poster"]
  },
  {
    id: 206,
    type: "image",
    title: "Bold Red & Black Campaign",
    sub: "Social Media Identity",
    img: "/Bold Red & Black Social Media Design.jpeg",
    color: "#ef4444",
    category: "Social Media",
    description: "High-impact social media creatives designed for maximum reach.",
    tags: ["Social", "Design", "Campaign"]
  },
  {
    id: 207,
    type: "image",
    title: "Business Growth Strategies",
    sub: "Data-Driven Scaling",
    img: "/businessgroth.png",
    color: "#5E35B1",
    category: "Strategy",
    description: "Strategic frameworks designed to accelerate business expansion.",
    tags: ["Growth", "Scaling", "Strategy"]
  },
  {
    id: 208,
    type: "image",
    title: "Tiger Brand Artwork",
    sub: "Bold Organic Identity",
    img: "/tiger.jpeg",
    color: "#f97316",
    category: "Illustration",
    description: "Powerful organic illustrations and fierce brand imagery.",
    tags: ["Illustration", "Art", "Brand"]
  },
  {
    id: 209,
    type: "image",
    title: "Wise Owl Identity",
    sub: "Precision Design & Vector",
    img: "/owl.jpeg",
    color: "#6366f1",
    category: "Identity",
    description: "Clean geometric identity systems representing intellect and insight.",
    tags: ["Vector", "Identity", "Design"]
  },
  {
    id: 210,
    type: "image",
    title: "Agency Portfolio System",
    sub: "Showcase Direction",
    img: "/Portfolio.jpeg",
    color: "#ec4899",
    category: "Portfolio",
    description: "A showcase of world-class brand, digital, and film productions.",
    tags: ["Portfolio", "Agency", "Showcase"]
  },
  {
    id: 211,
    type: "image",
    title: "Strategic Execution Roadmap",
    sub: "Enterprise Planning",
    img: "/strategy.png",
    color: "#f59e0b",
    category: "Strategy",
    description: "Structured execution roadmaps for modern digital product launches.",
    tags: ["Strategy", "Planning", "Roadmap"]
  },
  {
    id: 212,
    type: "image",
    title: "Where Creativity Meets Impact",
    sub: "Creative Vision",
    img: "/where-creativity-meets.png",
    color: "#f97316",
    category: "Vision",
    description: "Harmonizing creative excellence with measurable business performance.",
    tags: ["Vision", "Creativity", "Impact"]
  }
];

interface HeroDualMarqueeProps {
  startIntro?: boolean;
}

function TiltCard({
  card,
  onClick,
  priority
}: {
  card: Card;
  onClick: () => void;
  priority: boolean;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<{
    transform?: string;
    shineX?: number;
    shineY?: number;
    isHovered?: boolean;
  }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 10;
    const rotY = (x / (rect.width / 2)) * 10;
    
    setTiltStyle({
      transform: `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`,
      shineX: e.clientX - rect.left,
      shineY: e.clientY - rect.top,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      isHovered: false
    });
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tiltStyle.transform,
        transition: tiltStyle.isHovered
          ? "transform 0.12s ease-out, border-color 0.3s ease, box-shadow 0.3s ease"
          : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease"
      }}
    >
      <Image
        src={card.img || "/ads-creative.png"}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 200px, 295px"
        className={styles.cardImage}
        priority={priority}
      />
      <div className={styles.cardOverlay} />
      {tiltStyle.isHovered && tiltStyle.shineX !== undefined && (
        <div
          className={styles.cardShine}
          style={{
            background: `radial-gradient(circle at ${tiltStyle.shineX}px ${tiltStyle.shineY}px, rgba(255, 255, 255, 0.25) 0%, transparent 65%)`
          }}
        />
      )}
    </div>
  );
}

export default function HeroDualMarquee({ startIntro = true }: HeroDualMarqueeProps) {
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  return (
    <>
      <div
        className={styles.marqueeContainer}
        style={{
          opacity: startIntro ? 1 : 0,
          transform: startIntro ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* ─── ROW 1: Moves Leftwards ─── */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackLeft}>
            {[...ROW_1_CARDS, ...ROW_1_CARDS].map((card, idx) => (
              <TiltCard
                key={`r1-${card.id}-${idx}`}
                card={card}
                onClick={() => setActiveCard(card)}
                priority={idx < 6}
              />
            ))}
          </div>
        </div>

        {/* ─── ROW 2: Moves Rightwards ─── */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackRight}>
            {[...ROW_2_CARDS, ...ROW_2_CARDS].map((card, idx) => (
              <TiltCard
                key={`r2-${card.id}-${idx}`}
                card={card}
                onClick={() => setActiveCard(card)}
                priority={idx < 6}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal on Click */}
      {activeCard && <ProductModal card={activeCard} onClose={() => setActiveCard(null)} />}
    </>
  );
}

// restructured for maintainability
