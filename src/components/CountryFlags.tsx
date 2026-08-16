import React from "react";

export function FlagUSA({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0z"/>
        <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"/>
        <path fill="#192f5d" d="M0 0h260v260H0z"/>
        <circle cx="130" cy="130" r="100" fill="#ffffff" opacity="0.95"/>
        <circle cx="130" cy="130" r="80" fill="#192f5d"/>
        <path fill="#ffffff" d="M130 65l12 37h39l-31 23 12 37-32-23-32 23 12-37-31-23h39z"/>
      </g>
    </svg>
  );
}

export function FlagUAE({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#00732f" d="M0 0h640v160H0z"/>
      <path fill="#ffffff" d="M0 160h640v160H0z"/>
      <path fill="#000000" d="M0 320h640v160H0z"/>
      <path fill="#ff0000" d="M0 0h160v480H0z"/>
    </svg>
  );
}

export function FlagAustralia({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#00008b" d="M0 0h640v480H0z"/>
      <path fill="#ffffff" d="M0 0h320v240H0z"/>
      <path fill="#cc0000" d="M0 100h320v40H0zM140 0h40v240h-40z"/>
      <circle cx="480" cy="120" r="28" fill="#ffffff"/>
      <circle cx="540" cy="220" r="28" fill="#ffffff"/>
      <circle cx="480" cy="340" r="28" fill="#ffffff"/>
      <circle cx="420" cy="240" r="28" fill="#ffffff"/>
    </svg>
  );
}

export function FlagItaly({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#009246" d="M0 0h213.3v480H0z"/>
      <path fill="#ffffff" d="M213.3 0h213.4v480H213.3z"/>
      <path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/>
    </svg>
  );
}

export function FlagSingapore({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#ed2939" d="M0 0h640v240H0z"/>
      <path fill="#ffffff" d="M0 240h640v240H0z"/>
      <circle cx="120" cy="120" r="70" fill="#ffffff"/>
      <circle cx="145" cy="120" r="60" fill="#ed2939"/>
    </svg>
  );
}

export function FlagCyprus({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#ffffff" d="M0 0h640v480H0z"/>
      <path fill="#d47600" d="M260 160l140 40-40 80-120-20z"/>
      <path fill="#4e7330" d="M220 320c40 30 160 30 200 0" stroke="#4e7330" strokeWidth="16" fillOpacity="0"/>
    </svg>
  );
}

export function FlagSouthAfrica({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#de3831" d="M0 0h640v240H0z"/>
      <path fill="#002395" d="M0 240h640v240H0z"/>
      <path fill="#007a3d" d="M0 0l240 240L0 480h120l240-240L120 0z" stroke="#ffb612" strokeWidth="20"/>
      <path fill="#000000" d="M0 60l180 180L0 420z"/>
    </svg>
  );
}

export function FlagBangladesh({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={(size * 3) / 4} viewBox="0 0 640 480" className={className} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="#006a4e" d="M0 0h640v480H0z"/>
      <circle cx="280" cy="240" r="140" fill="#f42a41"/>
    </svg>
  );
}
