"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import SectionHeaderReveal from "./ui/SectionHeaderReveal";

interface ServiceItem {
  id: string;
  num: string;
  category: string;
  titlePrefix: string;
  titleItalic: string;
  titleSuffix?: string;
  subtitle: string;
  description: string;
  accentColor: string;
  accentGlow: string;
  cards: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    tag: string;
  }[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "branding",
    num: "01",
    category: "IDENTITY & DIRECTION",
    titlePrefix: "BRAND",
    titleItalic: "ING",
    subtitle: "Identity & Direction",
    description:
      "Logo Systems, Visual Direction, Brand Architecture, Typography Systems, Color Harmonies, Luxury Stationery & Corporate Guidelines.",
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    cards: [
      {
        title: "Aurum Luxury Stationery",
        subtitle: "Embossed Gold Foil Identity",
        image: "/services/branding_stationery.jpg",
        alt: "Luxury Embossed Foil Stationery Mockup",
        tag: "Identity System"
      },
      {
        title: "STARTIO Visual Universe",
        subtitle: "Cybernetic Brand Identity & Direction",
        image: "/services/branding_portrait.jpg",
        alt: "Futuristic Brand Identity Poster",
        tag: "Brand Direction"
      }
    ]
  },
  {
    id: "film",
    num: "02",
    category: "STORIES IN MOTION",
    titlePrefix: "FI",
    titleItalic: "LM",
    subtitle: "Stories in Motion",
    description:
      "Cinematic Commercials, Brand Documentaries, 3D Motion Graphics, Art Direction, Master Color Grading, Sound Design & Visual Storytelling.",
    accentColor: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.45)",
    cards: [
      {
        title: "ARRI Cinematic Suite",
        subtitle: "High-End Commercial Production",
        image: "/services/film_camera.jpg",
        alt: "ARRI Cinema Camera Rig On Set",
        tag: "Cinematography"
      },
      {
        title: "Master Color Grading",
        subtitle: "Post-Production & Motion Direction",
        image: "/services/film_editing.jpg",
        alt: "Color Grading Video Editing Suite",
        tag: "Post Production"
      }
    ]
  },
  {
    id: "digital",
    num: "03",
    category: "EXPERIENCES & INNOVATION",
    titlePrefix: "DIGI",
    titleItalic: "TAL",
    subtitle: "Experiences & Innovation",
    description:
      "Next-Gen UI/UX Design, Interactive Web Platforms, Spatial Interfaces, High-Performance Web Applications, Design Systems & Prototyping.",
    accentColor: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    cards: [
      {
        title: "Nexus Cloud Platform",
        subtitle: "B2B SaaS Workspace & Dashboard",
        image: "/services/uiux_laptop.jpg",
        alt: "MacBook SaaS Dashboard Mockup",
        tag: "UI/UX Design"
      },
      {
        title: "Vanguard Fintech App",
        subtitle: "Spatial iOS Card & Wallet Interface",
        image: "/services/uiux_mobile.jpg",
        alt: "Fintech Mobile iOS App Mockup",
        tag: "Mobile Experience"
      }
    ]
  },
  {
    id: "campaigns",
    num: "04",
    category: "IDEAS THAT GET NOTICED",
    titlePrefix: "CAMPAI",
    titleItalic: "GNS",
    subtitle: "Ideas That Get Noticed",
    description:
      "Omnichannel Creative Campaigns, Viral Brand Activations, 3D Billboard Experiences, Product Launches, Guerrilla Marketing & Content Ecosystems.",
    accentColor: "#f97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
    cards: [
      {
        title: "Design for Experiences",
        subtitle: "Global Editorial Campaign Launch",
        image: "/services/framer_monitor.jpg",
        alt: "Studio Desktop Monitor Campaign Mockup",
        tag: "Brand Campaign"
      },
      {
        title: "Success Stories 3D",
        subtitle: "Interactive Kinetic Campaign",
        image: "/services/framer_tablet.jpg",
        alt: "iPad 3D Agency Campaign Mockup",
        tag: "Digital Activation"
      }
    ]
  }
];

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Observe which card row is currently in the center of the viewport
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight * 0.48;

      let closestIdx = 0;
      let minDistance = Infinity;

      rowRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rowCenter = rect.top + rect.height * 0.4;
        const distance = Math.abs(rowCenter - centerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = index;
        }
      });

      if (closestIdx !== activeIdx) {
        setActiveIdx(closestIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIdx]);

  const scrollToRow = (index: number) => {
    const target = rowRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const currentService = SERVICES[activeIdx] || SERVICES[0];

  return (
    <section id="services" className={styles.section}>
      {/* Dynamic Ambient Background Glows */}
      <div
        className={styles.ambientGlow}
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${currentService.accentGlow} 0%, rgba(3, 3, 5, 0) 70%)`
        }}
      />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* ─── Top Header with Viewport 3D Reveal ────────────────────────────────────────────── */}
        <SectionHeaderReveal
          badge={
            <div className={styles.pillBadge}>
              <span className={styles.pillDot} style={{ backgroundColor: currentService.accentColor }} />
              <span>What We Do</span>
            </div>
          }
          title="We Design Brands That Speak to Audiences"
          titleClassName={styles.mainTitle}
        />

        {/* ─── Main Two-Column Split (Sticky Left + Scrolling Right) ── */}
        <div className={styles.contentSplit}>
          {/* ─── Left Column: Sticky Service Master ─────────────────── */}
          <div className={styles.stickyCol}>
            <div className={styles.stickyInner}>
              {/* Step Navigation Dots */}
              <div className={styles.stepNav}>
                {SERVICES.map((srv, idx) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => scrollToRow(idx)}
                    className={`${styles.stepBtn} ${idx === activeIdx ? styles.stepBtnActive : ""}`}
                    aria-label={`Jump to ${srv.titlePrefix}${srv.titleItalic}`}
                  >
                    <span className={styles.stepNum}>{srv.num}</span>
                    <span
                      className={styles.stepBar}
                      style={{
                        backgroundColor: idx === activeIdx ? srv.accentColor : "rgba(255,255,255,0.15)",
                        boxShadow: idx === activeIdx ? `0 0 10px ${srv.accentColor}` : "none"
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Dynamic Text Chamber with smooth 3D masked reveal on service change */}
              <div
                key={`service-chamber-${currentService.id}`}
                className={styles.textChamber}
              >
                <div
                  className={`${styles.serviceCategory} ${styles.animCategory}`}
                  style={{ color: currentService.accentColor }}
                >
                  {currentService.category}
                </div>

                <h3 className={`${styles.serviceTitle} ${styles.animTitleMask}`}>
                  <span className={styles.animTitleWord} style={{ animationDelay: "0.08s" }}>
                    {currentService.titlePrefix}
                  </span>
                  <span
                    className={`${styles.serifItalic} ${styles.animTitleWord}`}
                    style={{ animationDelay: "0.18s" }}
                  >
                    {currentService.titleItalic}
                  </span>
                  {currentService.titleSuffix && (
                    <span className={styles.animTitleWord} style={{ animationDelay: "0.28s" }}>
                      {currentService.titleSuffix}
                    </span>
                  )}
                </h3>

                <div className={`${styles.serviceSubtitle} ${styles.animSubtitle}`}>
                  {currentService.subtitle}
                </div>

                <div
                  className={`${styles.titleUnderline} ${styles.animUnderline}`}
                  style={{
                    backgroundColor: currentService.accentColor,
                    boxShadow: `0 0 14px ${currentService.accentGlow}`
                  }}
                />

                <p className={`${styles.serviceDesc} ${styles.animDesc}`}>
                  {currentService.description}
                </p>

                <div className={styles.ctaWrapper}>
                  <a
                    href="#contact"
                    className={styles.seeMoreLink}
                    style={{
                      color: currentService.accentColor,
                      borderColor: currentService.accentColor
                    }}
                  >
                    <span>See More</span>
                    <svg
                      className={styles.arrowIcon}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Scrolling Feed of Dual-Mockup Rows ─── */}
          <div className={styles.scrollFeed}>
            {SERVICES.map((srv, rowIdx) => (
              <div
                key={srv.id}
                ref={(el) => {
                  rowRefs.current[rowIdx] = el;
                }}
                data-index={rowIdx}
                className={`${styles.serviceRow} ${rowIdx === activeIdx ? styles.serviceRowActive : ""}`}
              >
                <div className={styles.mobileHeader}>
                  <div className={styles.mobileCategory} style={{ color: srv.accentColor }}>
                    {srv.category}
                  </div>
                  <h3 className={styles.mobileTitle}>
                    {srv.titlePrefix}
                    <span className={styles.serifItalic}>{srv.titleItalic}</span>
                  </h3>
                  <div className={styles.mobileSubtitle}>{srv.subtitle}</div>
                  <div
                    className={styles.mobileUnderline}
                    style={{ backgroundColor: srv.accentColor }}
                  />
                  <p className={styles.mobileDesc}>{srv.description}</p>
                </div>

                <div className={styles.dualCardGrid}>
                  {srv.cards.map((card, cardIdx) => (
                    <div
                      key={card.title}
                      className={styles.showcaseCard}
                      style={{
                        animationDelay: `${cardIdx * 0.15}s`
                      }}
                    >
                      <div className={styles.cardImageContainer}>
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 380px"
                          className={styles.cardImg}
                          priority={rowIdx === 0}
                        />
                        <div className={styles.cardOverlay} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
