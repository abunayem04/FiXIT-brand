"use client";

import { useEffect } from "react";

export default function SecurityWrapper() {
  useEffect(() => {
    const handleContextMenu = () => {
      // Allow right-click menu
      // _e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S
      if (e.ctrlKey) {
        if (
          (e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
          e.key === "U" || e.key === "u" ||
          e.key === "S" || e.key === "s"
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}

// improved type safety
