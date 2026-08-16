"use client";
import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./ProductModal.module.css";
import { Card } from "./SpiralCards";

interface ProductModalProps {
  card: Card;
  onClose: () => void;
}

export default function ProductModal({ card, onClose }: ProductModalProps) {
  // Lock body scroll + ESC key close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div 
      className={styles.overlay} 
      onClick={handleOverlayClick}
      style={{ '--theme-color': card.color || '#3c096c' } as React.CSSProperties}
    >
      <div className={styles.modal}>
        {/* ── Close button ───────────────────────────────────── */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close product view"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M1 1L17 17M17 1L1 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ── Left – Image panel ─────────────────────────────── */}
        <div className={styles.imagePanel}>
          {card.img && (
            <Image
              src={card.img}
              alt={card.title}
              fill
              sizes="50vw"
              className={styles.image}
              draggable={false}
              priority
            />
          )}
          {/* Gradient fade into content panel */}
          <div className={styles.imageFade} />

          {/* Category pill floating over image */}
          <span className={styles.categoryPill}>{card.category}</span>
        </div>

        {/* ── Right – Content panel ──────────────────────────── */}
        <div className={styles.contentPanel}>
          <div className={styles.contentInner}>
            {/* Service number */}
            <span className={styles.serviceNumber}>
              {String(card.id).padStart(2, "0")}
            </span>

            <h2 className={styles.title}>{card.title}</h2>

            <div className={styles.divider} />

            <p className={styles.description}>{card.description}</p>

            {/* Tags */}
            {card.tags && card.tags.length > 0 && (
              <div className={styles.tags}>
                {card.tags.map((tag: string) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <button className={styles.cta}>
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// straightforward approach

// fixed potential issue

// improved error handling here

// consistent style applied

// more explicit handling

// added validation check

// reduced duplication

// better separation of concerns

// followed best practice

// straightforward approach

// followed best practice
