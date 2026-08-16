import React from "react";

export function ToolPhotoshop({ size = 58 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={{ display: "block", borderRadius: "24%" }}
    >
      <title>Adobe Photoshop</title>
      <rect width="48" height="48" rx="11" fill="#001E36" />
      <rect x="1.5" y="1.5" width="45" height="45" rx="9.5" stroke="#31A8FF" strokeWidth="2.5" />
      <path
        d="M13.5 14h7c2.8 0 4.7.7 5.8 1.9 1.1 1.2 1.6 2.8 1.6 4.8 0 2.1-.6 3.7-1.8 4.9-1.2 1.2-3.1 1.8-5.6 1.8h-3v6.6h-4V14zm4 3.4v6.2h2.8c1.4 0 2.4-.3 3.1-1 .7-.7 1-1.6 1-2.8 0-1.1-.3-1.9-.9-2.5-.6-.6-1.6-.9-2.9-.9h-3.1z"
        fill="#31A8FF"
      />
      <path
        d="M34.8 23.8c-1.2-.6-2.5-.9-3.9-.9-1.3 0-2.3.3-2.9.9-.6.6-1 1.5-1 2.5 0 .9.3 1.6.9 2.2.6.5 1.5 1 2.8 1.5 1.8.6 3.1 1.4 3.9 2.3.8.9 1.2 2 1.2 3.4 0 1.9-.7 3.3-2.1 4.4-1.3 1-3.2 1.6-5.5 1.6-1.7 0-3.3-.3-4.7-1l1.1-3.4c1.3.7 2.6 1 3.9 1 1.2 0 2.2-.3 2.8-.9.6-.5 1-1.3 1-2.3 0-.9-.3-1.6-1-2.2-.6-.5-1.7-1.1-3.1-1.6-1.7-.7-3-1.5-3.7-2.3-.8-.9-1.1-2-1.1-3.4 0-1.7.7-3.1 2-4.1 1.3-1 3-1.5 5.1-1.5 1.5 0 3 .3 4.3.9l-1.1 3.3z"
        fill="#31A8FF"
      />
    </svg>
  );
}

export function ToolAfterEffects({ size = 58 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={{ display: "block", borderRadius: "24%" }}
    >
      <title>Adobe After Effects</title>
      <rect width="48" height="48" rx="11" fill="#00005B" />
      <rect x="1.5" y="1.5" width="45" height="45" rx="9.5" stroke="#9999FF" strokeWidth="2.5" />
      <path
        d="M20.2 34l-1.8-4.9H9.9L8.1 34H4L12 14h5.2l8 20h-5zm-5.8-16.2L11.5 26h5.8L14.4 17.8z"
        fill="#9999FF"
      />
      <path
        d="M39.5 28.5H29.1c.1 1.3.6 2.3 1.3 3 .8.7 1.8 1 3.1 1 1.5 0 2.9-.4 4.1-1.2l1.5 3c-1.7 1.2-3.8 1.8-6.1 1.8-2.8 0-5-.9-6.6-2.6-1.6-1.7-2.4-4-2.4-6.8s.8-5.1 2.3-6.8c1.5-1.7 3.7-2.6 6.4-2.6 2.6 0 4.6.9 6 2.5 1.4 1.6 2.1 3.9 2.1 6.7v2zm-4.1-3.2c0-1.2-.3-2.1-.9-2.8-.6-.7-1.4-1-2.5-1-1 0-1.8.3-2.5 1-.7.7-1 1.6-1.1 2.8h7z"
        fill="#9999FF"
      />
    </svg>
  );
}

export function ToolIllustrator({ size = 58 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={{ display: "block", borderRadius: "24%" }}
    >
      <title>Adobe Illustrator</title>
      <rect width="48" height="48" rx="11" fill="#330000" />
      <rect x="1.5" y="1.5" width="45" height="45" rx="9.5" stroke="#FF9A00" strokeWidth="2.5" />
      <path
        d="M22 34l-1.9-4.9H11.2L9.3 34H5L13.3 14h5.4L27 34h-5zm-6.2-16.3L12.9 26h6l-3.1-8.3z"
        fill="#FF9A00"
      />
      <path
        d="M31.2 17.5c-.9 0-1.5-.3-2.1-.9-.5-.5-.8-1.2-.8-2.1 0-.9.3-1.6.8-2.1.5-.5 1.2-.8 2.1-.8.9 0 1.5.3 2.1.8.5.5.8 1.2.8 2.1 0 .9-.3 1.6-.8 2.1-.6.6-1.2.9-2.1.9zm-2.4 16.5V19.8h4.8V34h-4.8z"
        fill="#FF9A00"
      />
    </svg>
  );
}

// reduced coupling
