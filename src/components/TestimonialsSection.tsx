"use client";
import React from 'react';
import styles from './TestimonialsSection.module.css';
import DriftWall from './DriftWall';

const testimonialItems = [
  { content: "FIXIT completely transformed our brand. The attention to detail and premium quality is unmatched.", author: "Sarah Jenkins", role: "CMO, TechNova" },
  { content: "Working with them felt less like an agency relationship and more like an extension of our team.", author: "David Cho", role: "Founder, Zenith" },
  { content: "Our conversion rates skyrocketed after the rebrand. The ROI is incredible.", author: "Amanda Lee", role: "VP Marketing, Lumina" },
  { content: "A world-class team delivering world-class results. We couldn't be happier.", author: "Marcus Thorne", role: "CEO, NexaCorp" },
  { content: "They understood our vision from day one and executed it flawlessly.", author: "Emily Rivera", role: "Brand Director, Astra" },
  { content: "The best creative partners we've ever worked with. Truly exceptional work.", author: "James Wilson", role: "Co-Founder, Elevate" },
  { content: "Their strategic approach to design helped us stand out in a crowded market.", author: "Nina Patel", role: "Head of Growth, Sync" },
  { content: "From strategy to execution, every step was handled with pure professionalism.", author: "Robert King", role: "Director, Blueprint" },
  { content: "They didn't just give us a logo; they gave us an identity we are proud of.", author: "Laura Simmons", role: "CMO, Horizon" },
  { content: "An absolute pleasure to work with. They push boundaries in the best way possible.", author: "Chris Evans", role: "Founder, Spark" },
];

import SectionHeaderReveal from './ui/SectionHeaderReveal';

const TestimonialsSection = () => {
  return (
    <section className={styles.section} id="testimonials">
      <SectionHeaderReveal
        badge={
          <div className={styles.badge || ""}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#a855f7", marginRight: 8 }} />
            VERIFIED FEEDBACK
          </div>
        }
        title="THE OPINIONS."
        subtitle="Don't just take our word for it. Here's what our partners have to say."
        titleClassName={styles.sectionTitle}
        subtitleClassName={styles.sectionSubtext}
      />
      
      <div className={styles.wallContainer}>
        <DriftWall
          items={testimonialItems}
          columns={4}
          tileWidth={320}
          tileHeight={200}
          gap={24}
          tilt={12}
          turn={-10}
          perspective={1200}
          depth={80}
          speed={30}
          direction="up"
          variance={0.4}
          parallax={0.6}
          pauseOnHover={false}
          lift={40}
          fade={0.2}
          dim={0.9}
          overlayColor="rgba(0, 0, 0, 0.2)"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
