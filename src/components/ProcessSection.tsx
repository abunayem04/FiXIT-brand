"use client";

import React from "react";
import styles from "./ProcessSection.module.css";
import { ArrowRight } from "lucide-react";

// ─── Exact Official Vector Logos ──────────────────────────────────────────
const OfficialLogos = {
  // OpenAI / ChatGPT official spiral mark
  OpenAI: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5977 3.8558L13.1038 8.364 15.1239 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4102-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.145-2.0728l2.548-1.4674 2.548 1.4674v2.9348l-2.548 1.4674-2.548-1.4674z"
        fill="#ffffff"
      />
    </svg>
  ),

  // Anthropic / Claude official starburst
  Claude: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.7 17.5L8.2 14.8L6.4 10.4L10.7 12.5L12.5 8L14.3 12.5L18.6 10.4L16.8 14.8L20.3 17.5L15.9 17.3L15.4 21.8L12.5 18.2L9.6 21.8L9.1 17.3L4.7 17.5Z"
        fill="#D97706"
      />
      <circle cx="12.5" cy="14" r="1.5" fill="#FFFBEB" />
    </svg>
  ),

  // Miro official 3 stripes logo
  Miro: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FFD02F" />
      <path
        d="M6.5 6L10.5 12L6.5 18M11.5 6L15.5 12L11.5 18M16.5 6L19.5 10.5L16.5 18"
        stroke="#050038"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // FigJam official icon
  FigJam: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#9747FF" />
      <path d="M7 7h10v10H7z" fill="#ffffff" rx="2" />
      <circle cx="12" cy="12" r="2.5" fill="#9747FF" />
    </svg>
  ),

  // Figma official multicolor 5 shapes logo
  Figma: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  ),

  // Adobe Photoshop official icon
  Photoshop: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill="#001E36" />
      <rect x="2" y="2" width="44" height="44" rx="8" stroke="#31A8FF" strokeWidth="2.5" />
      <path
        d="M13.5 14h7c2.8 0 4.7.7 5.8 1.9 1.1 1.2 1.6 2.8 1.6 4.8 0 2.1-.6 3.7-1.8 4.9-1.2 1.2-3.1 1.8-5.6 1.8h-3v6.6h-4V14zm4 3.4v6.2h2.8c1.4 0 2.4-.3 3.1-1 .7-.7 1-1.6 1-2.8 0-1.1-.3-1.9-.9-2.5-.6-.6-1.6-.9-2.9-.9h-3.1z"
        fill="#31A8FF"
      />
      <path
        d="M34.8 23.8c-1.2-.6-2.5-.9-3.9-.9-1.3 0-2.3.3-2.9.9-.6.6-1 1.5-1 2.5 0 .9.3 1.6.9 2.2.6.5 1.5 1 2.8 1.5 1.8.6 3.1 1.4 3.9 2.3.8.9 1.2 2 1.2 3.4 0 1.9-.7 3.3-2.1 4.4-1.3 1-3.2 1.6-5.5 1.6-1.7 0-3.3-.3-4.7-1l1.1-3.4c1.3.7 2.6 1 3.9 1 1.2 0 2.2-.3 2.8-.9.6-.5 1-1.3 1-2.3 0-.9-.3-1.6-1-2.2-.6-.5-1.7-1.1-3.1-1.6-1.7-.7-3-1.5-3.7-2.3-.8-.9-1.1-2-1.1-3.4 0-1.7.7-3.1 2-4.1 1.3-1 3-1.5 5.1-1.5 1.5 0 3 .3 4.3.9l-1.1 3.3z"
        fill="#31A8FF"
      />
    </svg>
  ),

  // Adobe Illustrator official icon
  Illustrator: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill="#330000" />
      <rect x="2" y="2" width="44" height="44" rx="8" stroke="#FF9A00" strokeWidth="2.5" />
      <path
        d="M20.5 34l-1.8-5.2h-7.4L9.5 34H5.2L13.8 14h4.4L24.8 34h-4.3zm-3-8.8L15 18.5l-2.5 6.7h5z"
        fill="#FF9A00"
      />
      <path d="M29 18h4v16h-4V18zm0-5.5h4v4h-4v-4z" fill="#FF9A00" />
    </svg>
  ),

  // Adobe After Effects official icon
  AfterEffects: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill="#00005B" />
      <rect x="2" y="2" width="44" height="44" rx="8" stroke="#9999FF" strokeWidth="2.5" />
      <path
        d="M20.2 34l-1.8-4.9H9.9L8.1 34H4L12 14h5.2l8 20h-5zm-5.8-16.2L11.5 26h5.8L14.4 17.8z"
        fill="#9999FF"
      />
      <path
        d="M39.5 28.5H29.1c.1 1.3.6 2.3 1.3 3 .8.7 1.8 1 3.1 1 1.5 0 2.9-.4 4.1-1.2l1.5 3c-1.7 1.2-3.8 1.8-6.1 1.8-2.8 0-5-.9-6.6-2.6-1.6-1.7-2.4-4-2.4-6.8s.8-5.1 2.3-6.8c1.5-1.7 3.7-2.6 6.4-2.6 2.6 0 4.6.9 6 2.5 1.4 1.6 2.1 3.9 2.1 6.7v2zm-4.1-3.2c0-1.2-.3-2.1-.9-2.8-.6-.7-1.4-1-2.5-1-1 0-1.8.3-2.5 1-.7.7-1 1.6-1.1 2.8h7z"
        fill="#9999FF"
      />
    </svg>
  ),

  // Midjourney official sailboat logo
  Midjourney: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L4 16h16L12 3zm0 4.2l4.8 7.8H7.2L12 7.2zM3 18.5c2.5 1.8 5.5 1.8 9 0s6.5-1.8 9 0"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  // Next.js official N logo
  Nextjs: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <path d="M8 7v10M16 7v6.5M8 8.5l8 8.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // WebGL official triangle logo
  WebGL: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polygon points="12 4 20 18 4 18" stroke="#EF4444" strokeWidth="2.2" fill="none" />
      <circle cx="12" cy="13" r="2.5" fill="#EF4444" />
    </svg>
  ),

  // GSAP official green logo
  GSAP: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0AE448" />
      <circle cx="12" cy="12" r="5" fill="#000000" />
      <path d="M12 9v6M9 12h6" stroke="#0AE448" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  // Vercel official triangle logo
  Vercel: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polygon points="12 5 20 19 4 19" fill="#ffffff" />
    </svg>
  ),

  // Linear official mark
  Linear: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 18L18 6M6 13L13 6M11 18L18 11" stroke="#818CF8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // Google Analytics official mark
  Analytics: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4.5" y="13" width="3.5" height="6" rx="1.5" fill="#F59E0B" />
      <rect x="10.25" y="9" width="3.5" height="10" rx="1.5" fill="#F59E0B" />
      <rect x="16" y="5" width="3.5" height="14" rx="1.5" fill="#F59E0B" />
    </svg>
  ),

  // SEO / Search Console
  SEO: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6" stroke="#38BDF8" strokeWidth="2.2" />
      <line x1="15.5" y1="15.5" x2="20" y2="20" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // Supabase official lightning mark
  Supabase: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 13h7l-1 9 9-11h-7l1-9z" fill="#3ECF8E" />
    </svg>
  ),

  // Tailwind CSS
  Tailwind: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 13c1.5-2 3-2.5 4.5-1.5s2 1.5 3.5.5 2-2.5 2-2.5-1.5 2-3 2.5-2-1.5-3.5-.5S7.5 14 6 13z"
        fill="#38BDF8"
      />
    </svg>
  ),

  // Blender
  Blender: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13.5" r="4" fill="#ffffff" />
      <circle cx="12" cy="13.5" r="2.2" fill="#228BE6" />
      <path d="M12 5v5M7 7.5l3.5 3.5M17 7.5l-3.5 3.5" stroke="#EA7600" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
};

// ─── The 4 Workflow Pillars ───────────────────────────────────────────────
const workflowSteps = [
  {
    id: "step-1",
    title: "Discover & Strategy",
    tools: [
      { name: "Claude (Anthropic)", icon: <OfficialLogos.Claude size={24} /> },
      { name: "Miro", icon: <OfficialLogos.Miro size={24} /> },
      { name: "ChatGPT (OpenAI)", icon: <OfficialLogos.OpenAI size={24} /> }
    ],
    produces: [
      "Discovery Report",
      "User Personas",
      "Content Hierarchy",
      "Market Moat"
    ]
  },
  {
    id: "step-2",
    title: "Design & Art Direction",
    tools: [
      { name: "Figma", icon: <OfficialLogos.Figma size={24} /> },
      { name: "Photoshop", icon: <OfficialLogos.Photoshop size={24} /> },
      { name: "Illustrator", icon: <OfficialLogos.Illustrator size={24} /> },
      { name: "Midjourney", icon: <OfficialLogos.Midjourney size={24} /> }
    ],
    produces: [
      "Visual Direction",
      "All Screens",
      "Design Systems",
      "3D Spatial Assets"
    ]
  },
  {
    id: "step-3",
    title: "Build & Engineering",
    tools: [
      { name: "Next.js", icon: <OfficialLogos.Nextjs size={24} /> },
      { name: "After Effects", icon: <OfficialLogos.AfterEffects size={24} /> },
      { name: "WebGL", icon: <OfficialLogos.WebGL size={24} /> },
      { name: "GSAP", icon: <OfficialLogos.GSAP size={24} /> }
    ],
    produces: [
      "Production Codebase",
      "CMS Integration",
      "Component Docs",
      "60 FPS Animation"
    ]
  },
  {
    id: "step-4",
    title: "Optimise & Scale",
    tools: [
      { name: "Vercel", icon: <OfficialLogos.Vercel size={24} /> },
      { name: "Linear", icon: <OfficialLogos.Linear size={24} /> },
      { name: "Analytics", icon: <OfficialLogos.Analytics size={24} /> },
      { name: "SEO", icon: <OfficialLogos.SEO size={24} /> }
    ],
    produces: [
      "CRO Recommendations",
      "A/B Test Plan",
      "Launch Report",
      "Continuous Scale"
    ]
  }
];

// Ribbon Infinite Marquee Icons
const ribbonRow1 = [
  <OfficialLogos.Figma key="m1" size={26} />,
  <OfficialLogos.Photoshop key="m2" size={26} />,
  <OfficialLogos.Illustrator key="m3" size={26} />,
  <OfficialLogos.AfterEffects key="m4" size={26} />,
  <OfficialLogos.Claude key="m5" size={26} />,
  <OfficialLogos.OpenAI key="m6" size={26} />,
  <OfficialLogos.Miro key="m7" size={26} />,
  <OfficialLogos.FigJam key="m8" size={26} />,
  <OfficialLogos.Midjourney key="m9" size={26} />,
  <OfficialLogos.Nextjs key="m10" size={26} />,
  <OfficialLogos.WebGL key="m11" size={26} />,
  <OfficialLogos.GSAP key="m12" size={26} />,
  <OfficialLogos.Vercel key="m13" size={26} />,
  <OfficialLogos.Linear key="m14" size={26} />,
  <OfficialLogos.Tailwind key="m15" size={26} />
];

const ribbonRow2 = [
  <OfficialLogos.SEO key="m16" size={26} />,
  <OfficialLogos.Analytics key="m17" size={26} />,
  <OfficialLogos.Blender key="m18" size={26} />,
  <OfficialLogos.Supabase key="m19" size={26} />,
  <OfficialLogos.Nextjs key="m20" size={26} />,
  <OfficialLogos.Figma key="m21" size={26} />,
  <OfficialLogos.Claude key="m22" size={26} />,
  <OfficialLogos.Midjourney key="m23" size={26} />,
  <OfficialLogos.OpenAI key="m24" size={26} />,
  <OfficialLogos.AfterEffects key="m25" size={26} />,
  <OfficialLogos.Photoshop key="m26" size={26} />,
  <OfficialLogos.Miro key="m27" size={26} />,
  <OfficialLogos.GSAP key="m28" size={26} />,
  <OfficialLogos.Vercel key="m29" size={26} />,
  <OfficialLogos.Linear key="m30" size={26} />
];

import SectionHeaderReveal from "./ui/SectionHeaderReveal";

export default function ProcessSection() {
  return (
    <section className={styles.section} id="process">
      {/* Background Lighting */}
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowCenter} />
      <div className={styles.gridMesh} />

      {/* ─── Top Section Header with Viewport 3D Reveal ───────────────────────── */}
      <SectionHeaderReveal
        badge={
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            AI-POWERED WORKFLOW
          </div>
        }
        title="Smarter Design, Supercharged By AI"
        subtitle="From wireframes to launch, we blend AI tools with bespoke strategy to deliver faster, sharper, and data-led design results."
        titleClassName={styles.sectionTitle}
        subtitleClassName={styles.sectionSubtext}
      />

      {/* ─── Tool Matrix Ribbon + Central Luminous Hub ─── */}
      <div className={styles.matrixWrapper}>
        {/* Row 1 (Scrolling Left) */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackLeft}>
            {[...ribbonRow1, ...ribbonRow1, ...ribbonRow1].map((icon, idx) => (
              <div key={idx} className={styles.toolTile}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackRight}>
            {[...ribbonRow2, ...ribbonRow2, ...ribbonRow2].map((icon, idx) => (
              <div key={idx} className={styles.toolTile}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Central Luminous Node (White Smiley Intelligence Core) */}
        <div className={styles.centralHubContainer}>
          <div className={styles.centralHubPulseAura} />
          <div className={styles.centralHubOuterRing} />
          <div className={styles.centralHubNode} title="FIXIT AI Intelligence Core">
            {/* White Smiley Core Icon matching reference */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="#ffffff"
              />
              <path
                d="M8 13.5c1 2.2 2.5 2.8 4 2.8s3-.6 4-2.8"
                stroke="#090d16"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ─── Branching Curved Circuit Connector Lines ─── */}
      <svg
        className={styles.branchingSvgWrapper}
        viewBox="0 0 1260 80"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="branchLineGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
          </linearGradient>
          <filter id="cyanGlowEffect" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 
          Branches from Central Hub (X: 630, Y: 0) to 4 Cards:
          - Card 1: X = 157.5 (Center of Card 1)
          - Card 2: X = 472.5 (Center of Card 2)
          - Card 3: X = 787.5 (Center of Card 3)
          - Card 4: X = 1102.5 (Center of Card 4)
        */}

        {/* Branch 1 (Far Left to Card 1) */}
        <path
          d="M 630 0 C 630 20, 610 24, 580 24 L 180 24 C 162 24, 157.5 28, 157.5 44 L 157.5 80"
          stroke="url(#branchLineGlow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          filter="url(#cyanGlowEffect)"
        />

        {/* Branch 2 (Left to Card 2) */}
        <path
          d="M 630 0 C 630 20, 610 24, 580 24 L 490 24 C 478 24, 472.5 28, 472.5 44 L 472.5 80"
          stroke="url(#branchLineGlow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          filter="url(#cyanGlowEffect)"
        />

        {/* Branch 3 (Right to Card 3) */}
        <path
          d="M 630 0 C 630 20, 650 24, 680 24 L 770 24 C 782 24, 787.5 28, 787.5 44 L 787.5 80"
          stroke="url(#branchLineGlow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          filter="url(#cyanGlowEffect)"
        />

        {/* Branch 4 (Far Right to Card 4) */}
        <path
          d="M 630 0 C 630 20, 650 24, 680 24 L 1080 24 C 1098 24, 1102.5 28, 1102.5 44 L 1102.5 80"
          stroke="url(#branchLineGlow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          filter="url(#cyanGlowEffect)"
        />

        {/* Connector Terminus Glowing Cyan Dots at top of each card */}
        <circle cx="157.5" cy="78" r="3.5" fill="#38bdf8" filter="url(#cyanGlowEffect)" />
        <circle cx="472.5" cy="78" r="3.5" fill="#38bdf8" filter="url(#cyanGlowEffect)" />
        <circle cx="787.5" cy="78" r="3.5" fill="#38bdf8" filter="url(#cyanGlowEffect)" />
        <circle cx="1102.5" cy="78" r="3.5" fill="#38bdf8" filter="url(#cyanGlowEffect)" />

        {/* ─── Traveling Electric Sparks along the 4 branches ─── */}
        <circle r="3" fill="#ffffff" filter="url(#cyanGlowEffect)">
          <animateMotion
            path="M 630 0 C 630 20, 610 24, 580 24 L 180 24 C 162 24, 157.5 28, 157.5 44 L 157.5 80"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#ffffff" filter="url(#cyanGlowEffect)">
          <animateMotion
            path="M 630 0 C 630 20, 610 24, 580 24 L 490 24 C 478 24, 472.5 28, 472.5 44 L 472.5 80"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#ffffff" filter="url(#cyanGlowEffect)">
          <animateMotion
            path="M 630 0 C 630 20, 650 24, 680 24 L 770 24 C 782 24, 787.5 28, 787.5 44 L 787.5 80"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#ffffff" filter="url(#cyanGlowEffect)">
          <animateMotion
            path="M 630 0 C 630 20, 650 24, 680 24 L 1080 24 C 1098 24, 1102.5 28, 1102.5 44 L 1102.5 80"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* ─── 4 Connected Workflow Pillar Cards ────────── */}
      <div className={styles.cardsContainer}>
        {workflowSteps.map((step) => (
          <div key={step.id} className={styles.workflowCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{step.title}</h3>

              {/* Tool Badges Row with Blue Reflection */}
              <div className={styles.toolsRow}>
                {step.tools.map((tool, idx) => (
                  <div key={idx} className={styles.toolBadgeIcon} title={tool.name}>
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Produces Section */}
            <div className={styles.producesSection}>
              <span className={styles.producesLabel}>PRODUCES:</span>
              <div className={styles.tagsGroup}>
                {step.produces.map((tag, idx) => (
                  <span key={idx} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Bottom Interactive CTA ───────────────────── */}
      <div className={styles.ctaContainer}>
        <a href="#contact" className={styles.ctaBtn}>
          <span>Explore AI Capabilities</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

// better approach for this section
