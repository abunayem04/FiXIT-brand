"use client";

import React from "react";
import styles from "./PricingSection.module.css";
import {
  Zap,
  Rocket,
  Crown,
  Clock
} from "lucide-react";

interface PricingPlan {
  id: string;
  tierName: string;
  subtitle: string;
  icon: React.ReactNode;
  targetBadge: string;
  startingAt: string;
  period?: string;
  originalPrice?: string | null;
  saveBadge?: string | null;
  isPopular: boolean;
  ctaText: string;
  ctaLink: string;
  slotsLeft: string;
  slotsDotColor: string;
  desc: string;
  coreDeliverables: string[];
  separatorText: string;
  proDeliverables: string[];
  timeline: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "professional",
    tierName: "Professional",
    subtitle: "One-Off Build & Foundation",
    icon: <Zap className={styles.tierIcon} size={20} />,
    targetBadge: "Seed & Launch",
    startingAt: "$3,999",
    period: "/ sprint",
    originalPrice: null,
    saveBadge: null,
    isPopular: false,
    ctaText: "Get Started →",
    ctaLink: "#contact",
    slotsLeft: "6/10 Slots Left",
    slotsDotColor: "#f59e0b",
    desc: "Perfect for a high-converting homepage hero, Product Hunt launch, or YC application.",
    coreDeliverables: [
      "1x Elite brand & UI foundation",
      "Strategic storyboard & scripting",
      "Creative & visual direction"
    ],
    separatorText: "Included Perks",
    proDeliverables: [
      "2 Revision sprint passes",
      "Fast feedback loops via Slack"
    ],
    timeline: "7-10 days"
  },
  {
    id: "premium",
    tierName: "Premium",
    subtitle: "3-Asset Growth Bundle",
    icon: <Rocket className={styles.tierIcon} size={20} />,
    targetBadge: "POPULAR",
    startingAt: "$9,995",
    period: "/ bundle",
    originalPrice: "$11,997",
    saveBadge: "SAVE $2,002",
    isPopular: true,
    ctaText: "Hop on a Quick Call →",
    ctaLink: "#contact",
    slotsLeft: "3/10 Slots Left",
    slotsDotColor: "#10b981",
    desc: "Cutdowns, hook variants, and priority delivery that paid-ad and outbound teams actually use.",
    coreDeliverables: [
      "3x Elite product & brand assets",
      "Dedicated senior design bandwidth",
      "Adaptive agile timelines",
      "Dynamic scripting & storyboards"
    ],
    separatorText: "Pro Capabilities",
    proDeliverables: [
      "2 Revision sprint passes",
      "Direct Slack channel access"
    ],
    timeline: "12-21 days"
  },
  {
    id: "ultra-pro",
    tierName: "Ultra Pro",
    subtitle: "Dedicated Agency Squad",
    icon: <Crown className={styles.tierIcon} size={20} />,
    targetBadge: "Enterprise",
    startingAt: "Custom",
    period: "/ monthly",
    originalPrice: null,
    saveBadge: null,
    isPopular: false,
    ctaText: "Get a Custom Quote →",
    ctaLink: "#contact",
    slotsLeft: "1 Squad Slot Open",
    slotsDotColor: "#ef4444",
    desc: "Dedicated senior designers and full-stack engineers embedded directly with your team for continuous scaling.",
    coreDeliverables: [
      "Dedicated multi-disciplinary squad",
      "Full-stack architecture & design",
      "Continuous design system scaling",
      "Daily standups & real-time sync"
    ],
    separatorText: "Enterprise SLA",
    proDeliverables: [
      "Zero-downtime global launches",
      "24/7 SLA priority support"
    ],
    timeline: "Flexible / Ongoing"
  }
];

import SectionHeaderReveal from "./ui/SectionHeaderReveal";

export default function PricingSection() {
  return (
    <section className={styles.section} id="pricing">
      {/* Background ambient lighting */}
      <div className={styles.ambientGlowCenter} />
      <div className={styles.ambientGlowPopular} />
      <div className={styles.gridMesh} />

      <SectionHeaderReveal
        badge={
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            TRANSPARENT ENGAGEMENT
          </div>
        }
        title="CHOOSE YOUR FIX."
        subtitle="Every brand faces unique market dynamics. Choose where you need us most, and we'll build your unfair advantage."
        titleClassName={styles.sectionTitle}
        subtitleClassName={styles.sectionSubtext}
      />

      <div className={styles.container}>
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.cardWrapper} ${plan.isPopular ? styles.popularWrapper : ""}`}
          >
            <div className={styles.card}>
              {/* Subtle top edge shine */}
              <div className={styles.cardTopShine} aria-hidden="true" />

              {/* ─── Top Section ─── */}
              <div className={styles.cardTopSection}>
                {/* Tier Name & Badge */}
                <div className={styles.planTierRow}>
                  <div className={styles.tierInfo}>
                    <div className={styles.tierHeading}>
                      {plan.icon}
                      <h3 className={styles.tierName}>{plan.tierName}</h3>
                    </div>
                    <span className={styles.tierSubtitle}>{plan.subtitle}</span>
                  </div>

                  {plan.saveBadge ? (
                    <span className={styles.saveBadge}>{plan.saveBadge}</span>
                  ) : (
                    <span
                      className={`${styles.badgePill} ${
                        plan.isPopular ? styles.popularBadge : ""
                      }`}
                    >
                      {plan.targetBadge}
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className={styles.priceBlock}>
                  <div className={styles.priceMainRow}>
                    <span className={styles.mainPrice}>{plan.startingAt}</span>
                    {plan.period && <span className={styles.period}>{plan.period}</span>}
                    {plan.originalPrice && (
                      <span className={styles.originalPrice}>{plan.originalPrice}</span>
                    )}
                  </div>
                  <p className={styles.planDesc}>{plan.desc}</p>
                </div>

                {/* CTA Button */}
                <a
                  href={plan.ctaLink}
                  className={`${styles.ctaBtn} ${
                    plan.isPopular ? styles.ctaBtnPopular : styles.ctaBtnDefault
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>

              {/* ─── Divider ─── */}
              <div className={styles.divider} />

              {/* ─── Deliverables Feature List ─── */}
              <div className={styles.featuresSection}>
                <ul className={styles.deliverablesList}>
                  {plan.coreDeliverables.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <span className={styles.checkIconCircle}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Separator */}
                <div className={styles.proSeparator}>
                  <span className={styles.proSepLine} />
                  <span>{plan.separatorText}</span>
                  <span className={styles.proSepLine} />
                </div>

                {/* Pro Deliverables */}
                <ul className={styles.deliverablesList}>
                  {plan.proDeliverables.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <span className={styles.checkIconCircle}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ─── Bottom Meta ─── */}
              <div className={styles.metaRow}>
                <div className={styles.metaTimeline}>
                  <Clock size={14} />
                  <span>{plan.timeline}</span>
                </div>
                <div className={styles.metaSlots}>
                  <span
                    className={styles.slotsDot}
                    style={{
                      backgroundColor: plan.slotsDotColor,
                      boxShadow: `0 0 8px ${plan.slotsDotColor}`
                    }}
                  />
                  <span>{plan.slotsLeft}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
