// src/components/ui/card.jsx
import React from "react";

export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl shadow-md p-4 m-2 border-2 border-gray-300 dark:border-themeColor 
        duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
