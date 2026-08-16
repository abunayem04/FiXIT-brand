"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SectionHeaderReveal.module.css";

interface SectionHeaderRevealProps {
  badge?: React.ReactNode;
  title: string | string[];
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  highlightMap?: Record<string, "gold" | "purple" | "cyan" | string>;
  allGold?: boolean;
}

export default function SectionHeaderReveal({
  badge,
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  highlightMap,
  allGold = false
}: SectionHeaderRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const lines = Array.isArray(title) ? title : [title];

  let totalWordIndex = 0;

  return (
    <div
      ref={containerRef}
      className={`${styles.headerContainer} ${isVisible ? styles.visible : ""} ${className}`}
    >
      {/* ─── Eyebrow Badge ─── */}
      {badge && <div className={styles.badgeWrap}>{badge}</div>}

      {/* ─── 3D Masked Staggered Title ─── */}
      <h2 className={titleClassName}>
        {lines.map((line, lineIdx) => {
          const words = line.split(" ");
          return (
            <span key={lineIdx} className={styles.titleLine}>
              {words.map((word, wordIdx) => {
                const currentIndex = totalWordIndex++;
                const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
                const isGold = allGold || highlightMap?.[cleanWord] === "gold" || highlightMap?.[word] === "gold" || cleanWord === "WINS";

                return (
                  <span key={wordIdx} className={styles.wordMask}>
                    <span
                      className={styles.wordItem}
                      style={{
                        transitionDelay: isVisible ? `${currentIndex * 0.08 + 0.12}s` : "0s"
                      }}
                    >
                      {isGold ? (
                        <span className={styles.goldWord}>{word}</span>
                      ) : (
                        word
                      )}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </h2>

      {/* ─── Subtitle Description ─── */}
      {subtitle && (
        <p className={`${styles.subtitle} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
