"use client";

import React, { useRef, useState, useEffect } from 'react';
import styles from './WhyFixitSection.module.css';
import SectionHeaderReveal from "./ui/SectionHeaderReveal";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.bentoCard} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.cardGlow}
        style={{
          background: `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, rgba(168, 85, 247, 0.22) 0%, transparent 60%)`,
          opacity: spotlight.opacity,
          transition: spotlight.opacity ? "opacity 0.2s ease" : "opacity 0.5s ease"
        }}
      />
      {children}
    </div>
  );
}

export default function WhyFixitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counterTriggered, setCounterTriggered] = useState(false);
  const [conversionLift, setConversionLift] = useState(0);
  const [fundingSecured, setFundingSecured] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counterTriggered) {
          setCounterTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [counterTriggered]);

  useEffect(() => {
    if (!counterTriggered) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setConversionLift(Math.floor(easeProgress * 185));
      setFundingSecured(Math.floor(easeProgress * 140));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [counterTriggered]);

  return (
    <section ref={sectionRef} className={styles.section} id="advantage">
      {/* Ambient background glow */}
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Section Header with Viewport 3D Reveal */}
        <SectionHeaderReveal
          badge={
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              THE FIXIT PROMISE
            </div>
          }
          title={["WHY TOP FOUNDERS", "CHOOSE FIXIT."]}
          subtitle="We don't use generic templates. We create custom, world-class designs and blazing-fast websites that turn visitors into loyal paying customers."
          titleClassName={styles.title}
          subtitleClassName={styles.subtitle}
        />

        {/* Haute-Couture Bento Grid with Interactive Spotlights */}
        <div className={styles.bentoGrid}>
          
          {/* Bento Card 1: Real Results (Span 2) */}
          <SpotlightCard className={styles.cardSpan2}>
            <div className={styles.cardHeader}>
              <span className={styles.moduleCode}>01 // REAL RESULTS</span>
              <span className={styles.statusPill}>Proven Growth</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Designs Built to <span className={styles.highlight}>Grow Your Sales</span></h3>
              <p className={styles.cardDesc}>
                We don&apos;t just make things look good. Every color, button, and layout is built using proven strategies that turn website visitors into paying clients.
              </p>

              {/* Interactive Data Waveform Visualizer with Live Counters */}
              <div className={styles.waveformBox}>
                <div className={styles.metricRow}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>+{conversionLift}%</span>
                    <span className={styles.metricLabel}>Average Sales Boost</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>${fundingSecured}M+</span>
                    <span className={styles.metricLabel}>Raised by Clients</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>4.9/5</span>
                    <span className={styles.metricLabel}>Client Satisfaction</span>
                  </div>
                </div>

                <svg className={styles.waveSvg} viewBox="0 0 500 80" preserveAspectRatio="none">
                  <path
                    d="M0,45 Q125,10 250,50 T500,20 L500,80 L0,80 Z"
                    fill="url(#waveGrad)"
                  />
                  <path
                    d="M0,45 Q125,10 250,50 T500,20"
                    fill="none"
                    stroke="#a461d8"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a461d8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3c096c" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Card 2: World-Class Design Quality */}
          <SpotlightCard>
            <div className={styles.cardHeader}>
              <span className={styles.moduleCode}>02 // DESIGN QUALITY</span>
              <span className={styles.statusPill}>Top 1% Aesthetic</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Stand Out From <span className={styles.highlight}>Competitors</span></h3>
              <p className={styles.cardDesc}>
                People judge your business in the first 3 seconds. We create clean, memorable, and premium visuals that make customers trust you instantly.
              </p>

              <div className={styles.tagMatrix}>
                <span className={styles.pillTag}>Custom Logos</span>
                <span className={styles.pillTag}>Modern UI/UX</span>
                <span className={styles.pillTag}>3D &amp; Motion</span>
                <span className={styles.pillTag}>Clean Branding</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Card 3: 100/100 Super Fast Speed */}
          <SpotlightCard>
            <div className={styles.cardHeader}>
              <span className={styles.moduleCode}>03 // SPEED</span>
              <span className={styles.statusPillGreen}>Score 100/100</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Crazy Fast <span className={styles.highlight}>Loading</span></h3>
              <p className={styles.cardDesc}>
                No slow or laggy pages. We code everything with modern tech so your site opens in less than 1 second on both phone and computer.
              </p>

              <div className={styles.speedGaugeRow}>
                <div className={styles.speedCircle}>
                  <svg width="70" height="70" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#10b981"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="200"
                      strokeDashoffset={counterTriggered ? "0" : "150"}
                      strokeLinecap="round"
                      style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    />
                  </svg>
                  <span className={styles.speedScore}>100</span>
                </div>
                <div className={styles.speedMetrics}>
                  <div className={styles.statLine}><span>Load Time</span> <strong>0.4s</strong></div>
                  <div className={styles.statLine}><span>Layout Shift</span> <strong>0.00</strong></div>
                  <div className={styles.statLine}><span>Smoothness</span> <strong>60 FPS</strong></div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Card 4: Work Directly With Experts (Span 2) */}
          <SpotlightCard className={styles.cardSpan2}>
            <div className={styles.cardHeader}>
              <span className={styles.moduleCode}>04 // DIRECT WORK</span>
              <span className={styles.statusPill}>No Junior Handoffs</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Work Directly With <span className={styles.highlight}>Senior Experts</span></h3>
              <p className={styles.cardDesc}>
                No middlemen, no slow emails. You chat directly with our lead designers and developers on Slack or WhatsApp with fast daily progress updates.
              </p>

              <div className={styles.workflowSteps}>
                <div className={styles.stepItem}>
                  <span className={styles.stepIndex}>01</span>
                  <div>
                    <strong>Plan &amp; Goals</strong>
                    <p>Learn your vision and audience</p>
                  </div>
                </div>
                <div className={styles.stepArrow}>→</div>
                <div className={styles.stepItem}>
                  <span className={styles.stepIndex}>02</span>
                  <div>
                    <strong>Design &amp; Build</strong>
                    <p>Craft your custom visuals</p>
                  </div>
                </div>
                <div className={styles.stepArrow}>→</div>
                <div className={styles.stepItem}>
                  <span className={styles.stepIndex}>03</span>
                  <div>
                    <strong>Ready to Launch</strong>
                    <p>Go live smoothly with zero stress</p>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}
