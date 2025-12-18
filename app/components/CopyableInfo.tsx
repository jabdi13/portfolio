"use client"

import { useState } from "react";

interface CopyableInfoProps {
  label: string;
  value: string;
  type?: "email" | "phone";
  copyLabel?: string;
  copiedLabel?: string;
}

/**
 * Copyable Info Component
 *
 * Displays contact information with copy-to-clipboard functionality.
 * Shows a toast notification when successfully copied.
 */
export function CopyableInfo({
  label,
  value,
  type = "email",
  copyLabel = "Copy",
  copiedLabel = "Copied!"
}: CopyableInfoProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-5 text-center relative">
      <h3 className="text-4xl">{label}</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="text-lg">{value}</p>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus-visible:ring-4 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
          aria-label={`Copy ${label.toLowerCase()} to clipboard`}
        >
          {copied ? (
            <>
              <svg
                className="w-5 h-5 text-gold-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-medium text-gold-500">{copiedLabel}</span>
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium">{copyLabel}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
