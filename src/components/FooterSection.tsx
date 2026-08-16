"use client";

import React from "react";
import styles from "./FooterSection.module.css";
import { ArrowUp } from "lucide-react";

// Social Vector SVGs matching the round icons in reference
const SocialIcons = {
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  TwitterX: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Dribbble: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.198 10.706c-.456-.051-2.913-.306-5.748.455-.178-.396-.367-.788-.567-1.173 3.473-1.614 4.887-3.664 4.981-3.805 1.054 1.278 1.688 2.87 1.688 4.606 0 .041-.004.08-.004.121zm-2.073-6.208c-.139.186-1.583 2.115-4.888 3.652-1.503-2.656-3.176-4.993-3.327-5.204 1.761-.643 3.667-.803 5.485-.297.994.275 1.936.786 2.73 1.849zm-8.125-2.498c.159.222 1.859 2.597 3.374 5.291-3.057 1.013-6.866 1.492-9.771 1.554.912-3.136 3.428-5.618 6.397-6.845zm-7.965 9.071c.046 0 .151 0 .285-.002 2.665-.054 6.223-.497 9.176-1.464.195.374.379.754.551 1.139-4.218 1.341-8.239 4.316-9.155 5.076-1.309-1.325-2.115-3.125-2.115-5.111 0-.399.034-.789.096-1.168.049.001.099.002.148.002 1.014 0 1.014 1.528 0 1.528zm2.08 6.785c.783-.699 4.298-3.41 8.358-4.717 1.177 3.109 1.674 6.002 1.761 6.551-2.973 1.547-6.529 1.398-9.44-.755-.246-.184-.474-.378-.679-.579zm11.96-1.385c-.098-.553-.583-3.238-1.706-6.229 2.584-.712 4.805-.487 5.234-.436-.312 2.898-1.842 5.378-4.041 6.942-.239.17-.488.324-.746.464.42-.247.842-.497 1.259-.741z" />
    </svg>
  )
};

export default function FooterSection() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer} id="footer">
      {/* High-Tech Dot Grid & Purple Ambient Lighting */}
      <div className={styles.dotGridBackdrop} />
      <div className={styles.ambientPurpleAura} />

      <div className={styles.container}>
        {/* ─── Top 3-Column Grid ─────────────────────────────── */}
        <div className={styles.topGrid}>
          {/* Column 1: Brand Signature & Bio */}
          <div className={styles.brandCol}>
            <h3 className={styles.handwrittenSignature}>Fixit Studio</h3>
            <p className={styles.brandDescription}>
              Bespoke brand architecture, haute-couture digital craft, and advanced engineering. Where creative excellence meets category dominance.
            </p>

            {/* Circular Social Icon Badges */}
            <div className={styles.socialsGroup}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircleBtn} aria-label="GitHub">
                <SocialIcons.Github />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircleBtn} aria-label="LinkedIn">
                <SocialIcons.LinkedIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircleBtn} aria-label="Twitter">
                <SocialIcons.TwitterX />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircleBtn} aria-label="Dribbble">
                <SocialIcons.Dribbble />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.linksCol}>
            <span className={styles.monoHeader}>NAVIGATION</span>
            <ul className={styles.linksList}>
              <li><a href="#home" className={styles.linkItem}>HOME</a></li>
              <li><a href="#services" className={styles.linkItem}>CAPABILITIES</a></li>
              <li><a href="#advantage" className={styles.linkItem}>ADVANTAGE</a></li>
              <li><a href="#works" className={styles.linkItem}>SELECTED WORKS</a></li>
              <li><a href="#process" className={styles.linkItem}>PROCESS</a></li>
              <li><a href="#pricing" className={styles.linkItem}>ENGAGEMENTS</a></li>
              <li><a href="#contact" className={styles.linkItem}>CONTACT</a></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className={styles.linksCol}>
            <span className={styles.monoHeader}>SERVICES</span>
            <ul className={styles.linksList}>
              <li><a href="#services" className={styles.linkItem}>BRAND STRATEGY &amp; IDENTITY</a></li>
              <li><a href="#services" className={styles.linkItem}>UI/UX &amp; DIGITAL PRODUCTS</a></li>
              <li><a href="#services" className={styles.linkItem}>FULL-STACK &amp; 3D WEB ENGINEERING</a></li>
              <li><a href="#services" className={styles.linkItem}>CINEMATIC MOTION &amp; 3D VISUALS</a></li>
              <li><a href="#services" className={styles.linkItem}>OMNICHANNEL PAID AD CREATIVE</a></li>
              <li><a href="#services" className={styles.linkItem}>DESIGN SYSTEMS &amp; RETROFIT</a></li>
            </ul>
          </div>
        </div>

        {/* ─── Middle Contact & Location Rows ────────────────── */}
        <div className={styles.middleMetaSection}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>GET IN TOUCH</span>
            <a href="mailto:hello@fixitbrand.com" className={styles.emailRow}>
              <span className={styles.emailPulseDot} />
              <span>HELLO@FIXITBRAND.COM</span>
            </a>
          </div>

          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>BASED IN</span>
            <p className={styles.locationText}>
              BANGLADESH · NEW YORK · LONDON · WORKING GLOBALLY
            </p>
          </div>
        </div>

        {/* ─── Moving Horizontal Stream of Alternating FIXIT Logos (Right to Left) with 2-Side Black Shadow ── */}
        <div className={styles.giantLogoContainer} aria-hidden="true">
          {/* Left and Right Deep Black Vignettes */}
          <div className={styles.sideShadowLeft} />
          <div className={styles.sideShadowRight} />

          <div className={styles.logoMarqueeTrack}>
            {/* Seamless infinite looping track of alternating purple and white logos separated by glowing dots */}
            {[
              "purple", "white", "purple", "white", "purple", "white",
              "purple", "white", "purple", "white", "purple", "white"
            ].map((type, idx) => (
              <React.Fragment key={`footer-logo-grp-${type}-${idx}`}>
                <div
                  className={type === "white" ? styles.logoItemWhite : styles.logoItemPurple}
                />
                <div className={styles.logoCenterDotWrapper}>
                  <span className={styles.logoCenterDot} />
                </div>
              </React.Fragment>
            ))}
          </div>
          
          {/* Horizontal Liquid Fluted Glass Overlay covering 80% with 6 sleek distinct horizontal refraction lines */}
          <div className={styles.horizontalLiquidGlass}>
            <div className={styles.glassSpecularBeam} />
            <div className={styles.horizontalRibbedLines}>
              <span className={styles.singleGlassLine} />
              <span className={styles.singleGlassLine} />
              <span className={styles.singleGlassLine} />
              <span className={styles.singleGlassLine} />
              <span className={styles.singleGlassLine} />
              <span className={styles.singleGlassLine} />
            </div>
            <div className={styles.glassCausticGlow} />
          </div>
        </div>

        {/* ─── Bottom Meta Bar ───────────────────────────────── */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://studio.etarnity.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.copyrightLink}
              title="Visit ETARNITY STUDIO"
            >
              ETARNITY STUDIO
            </a>{" "}
            · ALL RIGHTS RESERVED
          </div>

          <div className={styles.craftedWith}>
            <button onClick={scrollToTop} className={styles.topPillBtn} aria-label="Scroll to top">
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// reduced duplication
