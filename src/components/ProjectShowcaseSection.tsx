"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectShowcaseSection.module.css";
import SectionHeaderReveal from "./ui/SectionHeaderReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "Wild Majesty",
    client: "Apex Wildlife",
    category: "Brand & Film",
    impact: "✦ +240% Reach",
    image: "/tiger.jpeg",
    spanClass: styles.colSpan1,
  },
  {
    id: 2,
    title: "Double Exposure",
    client: "Vogue Studios",
    category: "Art Direction",
    impact: "✦ Global Campaign",
    image: "/Editing Tricks for Double Exposure Art.jpeg",
    spanClass: styles.colSpan2,
  },
  {
    id: 3,
    title: "Neon Bites",
    client: "Krave Snacks",
    category: "Product & Identity",
    impact: "✦ 120K Sold Out",
    image: "/snack purple.jpeg",
    spanClass: styles.colSpan2,
  },
  {
    id: 4,
    title: "Nocturnal Vision",
    client: "Lumina Optics",
    category: "Brand Strategy",
    impact: "✦ +180% Engagement",
    image: "/owl.jpeg",
    spanClass: styles.colSpan1,
  },
  {
    id: 5,
    title: "Chromatic Scales",
    client: "Morph 3D",
    category: "3D & Motion",
    impact: "✦ Awwwards Winner",
    image: "/girgity.jpeg",
    spanClass: styles.colSpan1,
  },
  {
    id: 6,
    title: "Cyberpunk Abstract",
    client: "Nexa Protocol",
    category: "Web3 Design System",
    impact: "✦ $18M Seed Raised",
    image: "/download (10).jpeg",
    spanClass: styles.colSpan1,
  },
  {
    id: 7,
    title: "Minimal Cyber",
    client: "Astra Platform",
    category: "UI/UX & SaaS",
    impact: "✦ 3.8x Conversion",
    image: "/download (9).jpeg",
    spanClass: styles.colSpan1,
  },
  {
    id: 8,
    title: "Vibrant Experience",
    client: "Hypergate",
    category: "Web Platform",
    impact: "✦ 1.2M Users",
    image: "/Portfolio.jpeg",
    spanClass: styles.colSpan1,
  },
  {
    id: 9,
    title: "Bold Media Campaign",
    client: "Redline Global",
    category: "Marketing Strategy",
    impact: "✦ +310% ROAS",
    image: "/Bold Red & Black Social Media Design.jpeg",
    spanClass: styles.colSpan2,
  },
  {
    id: 10,
    title: "Digital Solutions",
    client: "Zenith Corp",
    category: "Enterprise Rebrand",
    impact: "✦ +145% Pipeline",
    image: "/Building smart digital solutions for modern businesses ⚡💜.jpeg",
    spanClass: styles.colSpan2,
  },
  {
    id: 11,
    title: "AI Robot Concept",
    client: "Synthetix Labs",
    category: "Futuristic Design",
    impact: "✦ Top Tech 2026",
    image: "/Futuristic AI Robot Poster Design – Minimal Cyberpunk Tech Aesthetic.jpeg",
    spanClass: styles.colSpan1,
  }
];

export default function ProjectShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const grid3DWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the entire Grid Wrapper from a centered 3D tilted state to flat
    gsap.fromTo(grid3DWrapperRef.current, 
      {
        rotationX: 35,
        scale: 0.9,
        y: 120,
        opacity: 0,
      },
      {
        rotationX: 0,
        scale: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 25%",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef} id="works">
      <SectionHeaderReveal
        badge={
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            PROVEN TRACK RECORD
          </div>
        }
        title="INDUSTRY WINS WORK"
        subtitle="A curation of category-defining brands, digital platforms, and high-impact campaigns crafted for global market leaders."
        titleClassName={styles.title}
        subtitleClassName={styles.subtitle}
      />

      <div className={styles.perspectiveWrapper}>
        <div className={styles.grid3DWrapper} ref={grid3DWrapperRef}>
          <div className={styles.gridContainer}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`${styles.cardWrapper} ${project.spanClass}`}
              >
                <div className={styles.card}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />

                  {/* Rich Meaningful Hover Overlay */}
                  <div className={styles.cardOverlay}>
                    <div className={styles.overlayTop}>
                      <span className={styles.clientTag}>{project.client}</span>
                      <span className={styles.impactBadge}>{project.impact}</span>
                    </div>

                    <div className={styles.overlayBottom}>
                      <span className={styles.categoryPill}>{project.category}</span>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
