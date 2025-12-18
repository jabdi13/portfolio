"use client"

import { IconType } from 'react-icons';
import { designTokens } from '../styles/design-tokens';

interface SkillCardProps {
  name: string;
  icon: IconType;
  gradientFrom: string;
  gradientTo: string;
}

/**
 * Skill Card Component
 *
 * Displays a single technology skill with gradient background and icon.
 * Features hover states for interactivity.
 */
export function SkillCard({ name, icon: Icon, gradientFrom, gradientTo }: SkillCardProps) {
  return (
    <li
      className="relative rounded-2xl px-4 py-12 sm:px-6 sm:py-16 overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
      style={{
        background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Future: Could open modal or link to projects using this skill
        }
      }}
    >
      <Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] sm:text-[120px] opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-300" />
      <h4 className="relative text-center text-lg sm:text-2xl drop-shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
        {name}
      </h4>
    </li>
  );
}
