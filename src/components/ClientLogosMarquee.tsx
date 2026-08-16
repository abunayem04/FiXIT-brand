"use client";

import React from "react";
import Image from "next/image";
import styles from "./ClientLogosMarquee.module.css";
import SectionHeaderReveal from "./ui/SectionHeaderReveal";

interface BrandItem {
  id: string;
  name: string;
  file: string;
}

const ROW_1_BRANDS: BrandItem[] = [
  { id: "pepsi", name: "Pepsi", file: "pepsi.svg" },
  { id: "viber", name: "Rakuten Viber", file: "viber.svg" },
  { id: "telenor", name: "Telenor", file: "telenor.svg" },
  { id: "google", name: "Google", file: "google.svg" },
  { id: "spotify", name: "Spotify", file: "spotify.svg" },
  { id: "notion", name: "Notion", file: "notion.svg" },
  { id: "slack", name: "Slack", file: "slack.svg" },
  { id: "samsung", name: "Samsung", file: "samsung.svg" }
];

const ROW_2_BRANDS: BrandItem[] = [
  { id: "apple", name: "Apple", file: "apple.svg" },
  { id: "microsoft", name: "Microsoft", file: "microsoft.svg" },
  { id: "stripe", name: "Stripe", file: "stripe.svg" },
  { id: "openai", name: "OpenAI", file: "openai.svg" },
  { id: "airbnb", name: "Airbnb", file: "airbnb.svg" },
  { id: "amazon", name: "Amazon", file: "amazon.svg" },
  { id: "netflix", name: "Netflix", file: "netflix.svg" },
  { id: "nike", name: "Nike", file: "nike.svg" }
];

const ROW_3_BRANDS: BrandItem[] = [
  { id: "tesla", name: "Tesla", file: "tesla.svg" },
  { id: "meta", name: "Meta", file: "meta.svg" },
  { id: "uber", name: "Uber", file: "uber.svg" },
  { id: "figma", name: "Figma", file: "figma.svg" },
  { id: "github", name: "GitHub", file: "github.svg" },
  { id: "docker", name: "Docker", file: "docker.svg" },
  { id: "discord", name: "Discord", file: "discord.svg" },
  { id: "shopify", name: "Shopify", file: "shopify.svg" }
];

const ROW_4_BRANDS: BrandItem[] = [
  { id: "supabase", name: "Supabase", file: "supabase.svg" },
  { id: "linear", name: "Linear", file: "linear.svg" },
  { id: "vercel", name: "Vercel", file: "vercel.svg" },
  { id: "dribbble", name: "Dribbble", file: "dribbble.svg" },
  { id: "youtube", name: "YouTube", file: "youtube.svg" },
  { id: "intel", name: "Intel", file: "intel.svg" },
  { id: "twitch", name: "Twitch", file: "twitch.svg" },
  { id: "nvidia", name: "NVIDIA", file: "nvidia.svg" }
];

export default function ClientLogosMarquee() {
  return (
    <section className={styles.section} aria-label="Trusted by 200+ of the world's top brands">
      {/* Background Subtle Ambient Glow & Vignette */}
      <div className={styles.ambientGlow} />
      <div className={styles.topVignette} />

      <div className={styles.container}>
        {/* Screenshot-Matched Clean Headline with Viewport 3D Reveal & Golden Gradient */}
        <SectionHeaderReveal
          title="Trusted by 200+ of the world’s top brands"
          titleClassName={styles.title}
          allGold
        />

        {/* ─── 4-Row Multi-Directional Infinite Ticker ─────────────────────── */}
        <div className={styles.marqueeStage}>
          {/* Row 1: Moves Left to Right (scrollRight) */}
          <div className={styles.marqueeRow}>
            <div className={`${styles.track} ${styles.scrollRight}`}>
              {[...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS].map((brand, idx) => (
                <div key={`r1-${brand.id}-${idx}`} className={styles.brandCard}>
                  <div className={styles.iconWrap}>
                    <Image
                      src={`/logos/${brand.file}`}
                      alt={`${brand.name} official logo`}
                      width={28}
                      height={28}
                      className={styles.svgIcon}
                      unoptimized
                    />
                  </div>
                  <span className={styles.brandName}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moves Right to Left (scrollLeft) */}
          <div className={styles.marqueeRow}>
            <div className={`${styles.track} ${styles.scrollLeft}`}>
              {[...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS].map((brand, idx) => (
                <div key={`r2-${brand.id}-${idx}`} className={styles.brandCard}>
                  <div className={styles.iconWrap}>
                    <Image
                      src={`/logos/${brand.file}`}
                      alt={`${brand.name} official logo`}
                      width={28}
                      height={28}
                      className={styles.svgIcon}
                      unoptimized
                    />
                  </div>
                  <span className={styles.brandName}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Moves Left to Right (scrollRight) */}
          <div className={styles.marqueeRow}>
            <div className={`${styles.track} ${styles.scrollRight}`}>
              {[...ROW_3_BRANDS, ...ROW_3_BRANDS, ...ROW_3_BRANDS].map((brand, idx) => (
                <div key={`r3-${brand.id}-${idx}`} className={styles.brandCard}>
                  <div className={styles.iconWrap}>
                    <Image
                      src={`/logos/${brand.file}`}
                      alt={`${brand.name} official logo`}
                      width={28}
                      height={28}
                      className={styles.svgIcon}
                      unoptimized
                    />
                  </div>
                  <span className={styles.brandName}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 4: Moves Right to Left (scrollLeft) */}
          <div className={styles.marqueeRow}>
            <div className={`${styles.track} ${styles.scrollLeft}`}>
              {[...ROW_4_BRANDS, ...ROW_4_BRANDS, ...ROW_4_BRANDS].map((brand, idx) => (
                <div key={`r4-${brand.id}-${idx}`} className={styles.brandCard}>
                  <div className={styles.iconWrap}>
                    <Image
                      src={`/logos/${brand.file}`}
                      alt={`${brand.name} official logo`}
                      width={28}
                      height={28}
                      className={styles.svgIcon}
                      unoptimized
                    />
                  </div>
                  <span className={styles.brandName}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// straightforward approach
