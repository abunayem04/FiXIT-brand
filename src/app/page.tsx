"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./Hero.module.css";
import Preloader from "../components/Preloader";
import StaggeredMenu from "../components/StaggeredMenu";
import HeroDualMarquee from "../components/HeroDualMarquee";
import {
  FlagUSA,
  FlagUAE,
  FlagAustralia,
  FlagItaly,
  FlagSingapore,
  FlagCyprus,
  FlagSouthAfrica,
  FlagBangladesh
} from "../components/CountryFlags";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import ServicesSection from "@/components/ServicesSection";
import WhyFixitSection from "@/components/WhyFixitSection";
import EnterFixitSection from "@/components/EnterFixitSection";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import ExitFixitSection from "@/components/ExitFixitSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const heroStageRef = useRef<HTMLDivElement>(null);
  const countryBadgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const ratingBadgeRef = useRef<HTMLDivElement>(null);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  const startHeroAnimation = useCallback(() => {
    // Ultra-luxurious Hero Entrance Animation
    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll(`.${styles.word}`);
      const tl = gsap.timeline({ delay: 0.05 });

      // 1. Top Rating Trust Badge drops in smoothly
      tl.fromTo(
        ratingBadgeRef.current,
        { opacity: 0, y: -16, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
      )
      // 2. Word-by-word masked 3D rise and reveal
      .fromTo(
        words ?? [],
        { y: "115%", rotateX: -20, opacity: 0 },
        {
          y: "0%",
          rotateX: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.06,
          ease: "power4.out"
        },
        "-=0.5"
      )
      // 3. Country Flags Pill floats up
      .fromTo(
        countryBadgeRef.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      // 4. Glowing CTA button rises smoothly
      .fromTo(
        ctaGroupRef.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }, heroStageRef);

    return () => ctx.revert();
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsPreloaderDone(true);
    startHeroAnimation();
  }, [startHeroAnimation]);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '/' },
    { label: 'Capabilities', ariaLabel: 'View our services', link: '#services' },
    { label: 'Advantage', ariaLabel: 'Our strategic edge', link: '#advantage' },
    { label: 'Selected Works', ariaLabel: 'View client portfolio', link: '#works' },
    { label: 'Process', ariaLabel: 'How we build brands', link: '#process' },
    { label: 'Engagements', ariaLabel: 'Investment tiers', link: '#pricing' },
    { label: 'Contact', ariaLabel: 'Start your project', link: '#contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Instagram', link: 'https://instagram.com' }
  ];

  return (
    <>
      {/* ─── Lenis.dev Style Haute-Couture Preloader Screen ─── */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* ─── Full-Screen Staggered Overlay Menu (Top Logo Centered, Hamburger on Right) ─── */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        colors={['#1e1e24', '#0d0d12', '#3c096c', '#600999']}
        accentColor="#a461d8"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#c084fc"
        logoUrl="/logo.png"
      />

      <main>
        {/* ─── Ultra-Clean Editorial Centered Hero Section ────────────── */}
        <section className={styles.container}>
          {/* Velvety Deep Obsidian Aurora Canvas with Subtle Dot Matrix */}
          <div className={styles.gradientBg} />

          {/* Centered Editorial Stage */}
          <div className={styles.heroStage} ref={heroStageRef}>
            {/* 1. Clutch & Google 4.9 Rating Trust Badge (Top Center) */}
            <div className={styles.ratingBadge} ref={ratingBadgeRef}>
              <div className={styles.ratingLogos}>
                <div className={styles.clutchIconCircle} title="Clutch 5-Star Reviews">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <circle cx="17" cy="17" r="15.5" fill="#0d0e15" stroke="#ffffff" strokeWidth="1.6"/>
                    <circle cx="17" cy="17" r="5.5" fill="#ff4238"/>
                    <path d="M 17 8.5 A 8.5 8.5 0 1 0 25.5 17" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className={styles.googleIconCircle} title="Google Verified Reviews">
                  <svg width="34" height="34" viewBox="0 0 34 34">
                    <circle cx="17" cy="17" r="15.5" fill="#ffffff" stroke="#ffffff" strokeWidth="1.6"/>
                    <path d="M22.5 17.15c0-.46-.04-.9-.12-1.31H17v2.64h3.24a2.78 2.78 0 0 1-1.21 1.82v1.51h1.96c1.15-1.06 1.81-2.62 1.81-4.66z" fill="#4285F4"/>
                    <path d="M17 23.08c1.64 0 3.02-.54 4.03-1.47l-1.96-1.51c-.55.37-1.25.58-2.07.58-1.59 0-2.93-1.07-3.41-2.52h-2.03v1.57A6.08 6.08 0 0 0 17 23.08z" fill="#34A853"/>
                    <path d="M13.59 18.26a3.65 3.65 0 0 1 0-2.32v-1.57h-2.03a6.08 6.08 0 0 0 0 5.46l2.03-1.57z" fill="#FBBC05"/>
                    <path d="M17 13.33c.89 0 1.7.31 2.33.91l1.75-1.75C20.02 11.53 18.64 10.92 17 10.92a6.08 6.08 0 0 0-5.44 3.35l2.03 1.57c.48-1.45 1.82-2.51 3.41-2.51z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <div className={styles.ratingRow}>
                <span className={styles.ratingScore}>4.9</span>
                <div className={styles.starsRow}>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                </div>
              </div>
              <div className={styles.ratingTagline}>Leading Brand Design Agency</div>
            </div>

            {/* 2. Main Centered Headline: "We Fix Your Brand Identity" with Official Adobe Icons */}
            <h1 className={styles.heroHeadline} ref={headlineRef}>
              <div className={styles.lineMask}>
                <span className={`${styles.word} ${styles.whiteWord}`}>We</span>{" "}
                <span className={`${styles.word} ${styles.serifItalic}`}>Fix</span>{" "}
                <span className={`${styles.word} ${styles.whiteWord}`}>Your</span>
              </div>
              <div className={styles.lineMask}>
                <span className={`${styles.word} ${styles.whiteWord}`}>Brand</span>
                <span className={`${styles.word} ${styles.toolBadgesGroup}`}>
                  <span className={styles.adobeToolBadge} title="Adobe Photoshop">
                    <Image
                      src="/photoshop.png"
                      alt="Adobe Photoshop"
                      width={64}
                      height={64}
                      className={styles.toolImg}
                      priority
                    />
                  </span>
                  <span className={styles.adobeToolBadge} title="Adobe After Effects">
                    <Image
                      src="/aftereffects.webp"
                      alt="Adobe After Effects"
                      width={64}
                      height={64}
                      className={styles.toolImg}
                      priority
                    />
                  </span>
                  <span className={styles.adobeToolBadge} title="Adobe Illustrator">
                    <Image
                      src="/illustrator.png"
                      alt="Adobe Illustrator"
                      width={64}
                      height={64}
                      className={styles.toolImg}
                      priority
                    />
                  </span>
                </span>
                <span className={`${styles.word} ${styles.serifItalic}`}>Identity</span>
              </div>
            </h1>

            {/* 3. Country Flags Pill Badge */}
            <div className={styles.countryBadge} ref={countryBadgeRef}>
              <div className={styles.flagGroup}>
                <FlagUSA size={22} />
                <FlagUAE size={22} />
                <FlagAustralia size={22} />
                <FlagItaly size={22} />
              </div>
              <span className={styles.badgeText}>Designing across 8+ countries</span>
              <div className={styles.flagGroup}>
                <FlagSingapore size={22} />
                <FlagCyprus size={22} />
                <FlagSouthAfrica size={22} />
                <FlagBangladesh size={22} />
              </div>
            </div>

            {/* 4. Glowing CTA Button with Continuous 360° Moving Border Glow */}
            <div className={styles.ctaGroup} ref={ctaGroupRef}>
              <a href="#contact" className={styles.primaryCtaWrapper}>
                <div className={styles.movingGlowBeam} aria-hidden="true" />
                <div className={styles.primaryCta}>
                  <span>Book a Call</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Dual-Row Continuous Marquee Ribbon (24 Unique Images, Zero Duplicates) */}
          <HeroDualMarquee startIntro={isPreloaderDone} />
        </section>

        {/* ─── Client Logos Marquee (Instant Social Proof) ─────────── */}
        <ClientLogosMarquee />

        {/* ─── Services Section (Pinned Horizontal GSAP Scroll) ───── */}
        <div id="services">
          <ServicesSection />
        </div>
        
        {/* ─── Why FIXIT Section (Interactive Luxury Bento Grid) ──── */}
        <div id="advantage">
          <WhyFixitSection />
        </div>
        
        {/* ─── Enter FIXIT Zoom Section (Extreme 150x 3D Zoom) ─────── */}
        <EnterFixitSection />

        {/* ─── Project Showcase Section (3D Perspective Gallery) ──── */}
        <ProjectShowcaseSection />

        {/* ─── Process Section (Frosted Obsidian Stacking Cards) ──── */}
        <div id="process">
          <ProcessSection />
        </div>
        
        {/* ─── Exit FIXIT Zoom Section ─────────────────────────────── */}
        <ExitFixitSection />
        
        {/* ─── Pricing Section (Strategic Engagement Models) ──────── */}
        <PricingSection />
        
        {/* ─── Testimonials Section (3D DriftWall Matrix) ──────────── */}
        <TestimonialsSection />

        {/* ─── Contact Section (Bespoke Project Intake & Inquiry Card) ── */}
        <ContactSection />

        {/* ─── Global Agency Footer (Conversion CTA + Links) ───────── */}
        <FooterSection />
      </main>
    </>
  );
}
