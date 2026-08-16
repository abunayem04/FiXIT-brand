"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ContactSection.module.css";
import CountryCodeSelector from "./CountryCodeSelector";
import { COUNTRIES, Country } from "../data/countries";

import SectionHeaderReveal from "./ui/SectionHeaderReveal";

const BUDGET_OPTIONS = [
  "Less than $5K",
  "$5K - $10K",
  "$10K - $20K",
  "$20K - $50K",
  "More than $50K"
];

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
];

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState("$10K - $20K");
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Background Ambient Glows */}
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <SectionHeaderReveal
          badge={
            <div className={styles.offerBadge}>
              <span className={styles.offerText}>PROJECT INTAKE</span>
            </div>
          }
          title="START YOUR NEXT CHAPTER"
          subtitle="Ready to outpace your market competitors? Let's engineer your category dominance."
          titleClassName={styles.outerSectionTitle}
          subtitleClassName={styles.outerSectionSubtitle}
        />

        {/* ─── Main Dark Luxury Contact Card ───────────────────────── */}
        <div className={styles.contactCard}>
          {/* Subtle Ambient Glows inside Card Corners */}
          <div className={styles.cardGlowTopRight} />
          <div className={styles.cardGlowBottomLeft} />

          {/* ─── Left Column: Offer, Benefits & Founder Profile ───── */}
          <div className={styles.leftCol}>
            {/* Top Offer Eyebrow Pill */}
            <div className={styles.offerBadge}>
              <span className={styles.offerText}>Claim a $799 Consultation, on Us!</span>
            </div>

            {/* Card Headline */}
            <h3 className={styles.cardHeading}>
              <span>Enhance Your Brand</span>
              <span className={styles.headingItalic}>
                Potential <span className={styles.serifItalicHighlight}>At No Cost!</span>
              </span>
            </h3>

            {/* Trust List with Checkmarks */}
            <ul className={styles.trustList}>
              <li className={styles.trustItem}>
                <span className={styles.checkIcon}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Expect a response from us within 24 hours</span>
              </li>
              <li className={styles.trustItem}>
                <span className={styles.checkIcon}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>We&apos;re happy to sign an NDA upon request.</span>
              </li>
              <li className={styles.trustItem}>
                <span className={styles.checkIcon}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Get access to a team of dedicated product specialists.</span>
              </li>
            </ul>

            {/* Founder Profile Card */}
            <div className={styles.founderBox}>
              <div className={styles.founderPhotoWrapper}>
                <div className={styles.photoLavenderPattern} />
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                  alt="Abdessamad Fakhri" 
                  width={150}
                  height={150}
                  className={styles.founderPhoto}
                  priority
                />
              </div>

              <div className={styles.founderDetails}>
                <div className={styles.founderName}>Abdessamad Fakhri</div>
                <div className={styles.founderRole}>CEO &amp; Co-founder</div>

                <div className={styles.founderContactRow}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className={styles.phoneNumber}>01234567890</span>
                </div>

                <a href="#contact" className={styles.bookCallDirectLink}>
                  Book a Call Directly
                </a>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Interactive Contact Form ─────────────── */}
          <div className={styles.rightCol}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successCheckIcon}>✓</div>
                <div className={styles.successTitle}>Thank You! We Received Your Message.</div>
                <div className={styles.successDesc}>
                  Our senior design team will review your project requirements and get back to you within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Full Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={styles.input}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                {/* Email & Whatsapp Number (2 Columns) */}
                <div className={styles.twoColsRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="yourmail@gmail.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="whatsapp" className={styles.label}>
                      Whatsapp Number
                    </label>
                    <div className={styles.phoneInputGroup}>
                      <CountryCodeSelector
                        selectedCountry={selectedCountry}
                        onSelect={setSelectedCountry}
                      />
                      <input
                        id="whatsapp"
                        type="tel"
                        placeholder="123 456 7890"
                        className={styles.phoneInput}
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Budget Selection */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>Project Budget</label>
                  <div className={styles.budgetPillsGroup}>
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`${styles.budgetPill} ${
                          selectedBudget === opt ? styles.budgetPillActive : ""
                        }`}
                        onClick={() => setSelectedBudget(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className={styles.formGroup}>
                  <label htmlFor="details" className={styles.label}>
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    placeholder="I want to redesign my website.."
                    className={styles.textarea}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitBtn}>
                    <span>Let&apos;s Connect</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ─── Bottom Continuous Guarantee Slider Ribbon ────────────── */}
        <div className={styles.guaranteeRibbon}>
          <div className={styles.ribbonLeftGroup}>
            <div className={styles.avatarStack}>
              {AVATAR_URLS.map((url, i) => (
                <div className={styles.avatarCircle} key={i}>
                  <Image
                    src={url}
                    alt={`Team specialist ${i + 1}`}
                    width={40}
                    height={40}
                    className={styles.avatarImg}
                  />
                </div>
              ))}
              <div className={styles.avatarCountBadge}>
                <span>40+</span>
              </div>
            </div>
          </div>

          <div className={styles.ribbonMarqueeWrapper}>
            <div className={styles.ribbonMarqueeTrack}>
              <span className={styles.marqueeText}>
                Secure Today. Why Risk It With The <strong>Wrong Partner?</strong> Get 100% Value And Guarantee. Don&apos;t Settle For Less. &nbsp; • &nbsp;
              </span>
              <span className={styles.marqueeText}>
                Secure Today. Why Risk It With The <strong>Wrong Partner?</strong> Get 100% Value And Guarantee. Don&apos;t Settle For Less. &nbsp; • &nbsp;
              </span>
              <span className={styles.marqueeText}>
                Secure Today. Why Risk It With The <strong>Wrong Partner?</strong> Get 100% Value And Guarantee. Don&apos;t Settle For Less. &nbsp; • &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
