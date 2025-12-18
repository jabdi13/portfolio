/**
 * Design Tokens System
 *
 * Centralized design system for the portfolio.
 * All colors, spacing, and style patterns should reference these tokens.
 */

export const designTokens = {
  /**
   * Skill Card Gradient Colors
   * Extracted from page.tsx lines 123-156
   */
  skills: {
    javascript: {
      from: '#E1ED5C',
      to: '#757F00',
    },
    nodejs: {
      from: '#61df14',
      to: '#2D8803',
    },
    github: {
      from: '#535353',
      to: '#343434',
    },
    react: {
      from: '#04BEFE',
      to: '#4481EB',
    },
    redux: {
      from: '#7521FF',
      to: '#2C0EA6',
    },
    html: {
      from: '#F5990F',
      to: '#CB7E0C',
    },
    vue: {
      from: '#01C77F',
      to: '#017358',
    },
    sass: {
      from: '#C13FB4',
      to: '#7E177A',
    },
  },

  /**
   * Background Colors
   * Extracted from globals.css
   */
  backgrounds: {
    radialLight: {
      primary: '#007bc7',    // powder-500
      secondary: '#0066a6',  // powder-600
      tertiary: '#004f82',   // powder-700
    },
    radialDark: {
      primary: '#002244',    // navy
      secondary: '#001a33',
      tertiary: '#000f1f',
    },
  },

  /**
   * Scrollbar Colors
   * Extracted from globals.css lines 35, 41
   */
  scrollbar: {
    light: '#007bc7',  // powder-500
    dark: '#ffb612',   // gold-500
  },

  /**
   * Standardized Section Spacing
   *
   * Use these consistent spacing patterns across all sections
   */
  spacing: {
    section: {
      mobile: 'px-4 py-10',
      desktop: 'sm:px-24 sm:py-20',
      combined: 'px-4 sm:px-24 py-10 sm:py-20',
    },
    sectionTight: {
      // For About section
      mobile: 'px-4 py-8',
      desktop: 'sm:px-16 sm:py-16',
      combined: 'px-4 sm:px-16 py-8 sm:py-16',
    },
    container: {
      mobile: 'px-4',
      desktop: 'sm:px-16',
      combined: 'px-4 sm:px-16 py-10',
    },
  },

  /**
   * Button Variants
   * Standardized button styling
   */
  buttons: {
    variants: {
      primary: {
        base: 'bg-gold-500 text-navy font-semibold',
        hover: 'hover:bg-gold-600',
        focus: 'focus-visible:ring-4 focus-visible:ring-gold-400 focus-visible:ring-offset-2',
        transition: 'transition-all duration-300',
      },
      secondary: {
        base: 'bg-powder-500 text-white font-semibold',
        hover: 'hover:bg-powder-600',
        focus: 'focus-visible:ring-4 focus-visible:ring-powder-400 focus-visible:ring-offset-2',
        transition: 'transition-all duration-300',
      },
      outline: {
        base: 'border-2 border-white text-white font-semibold bg-transparent',
        hover: 'hover:bg-white hover:text-powder-600 dark:hover:text-navy',
        focus: 'focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2',
        transition: 'transition-all duration-300',
      },
      ghost: {
        base: 'bg-white/10 text-white font-semibold backdrop-blur-sm',
        hover: 'hover:bg-white/20',
        focus: 'focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2',
        transition: 'transition-all duration-300',
      },
    },
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-3.5 text-xl',
    },
    effects: {
      lift: 'hover:-translate-y-0.5',
      shadow: 'shadow-lg hover:shadow-xl',
    },
  },

  /**
   * Badge Variants
   * Standardized badge/tech tag styling
   */
  badges: {
    tech: {
      base: 'text-xs px-2 py-1 rounded-full border',
      colors: 'bg-powder-600/50 dark:bg-powder-500/30 border-powder-400/30 dark:border-gold-500/20',
      hover: 'hover:bg-powder-700/60 dark:hover:bg-powder-400/40 transition-colors',
      text: 'text-white',
    },
    status: {
      base: 'text-xs px-2 py-1 rounded-full',
      colors: 'bg-gold-500/20 border border-gold-500/30 text-gold-500',
    },
  },

  /**
   * Border Radius Standards
   */
  borderRadius: {
    button: 'rounded-xl',      // 12px - Standardized for all buttons
    card: 'rounded-2xl',       // 16px - For skill cards, project cards
    badge: 'rounded-full',     // 999px - For tech badges
    container: 'rounded-3xl',  // 24px - For nav, section containers
  },

  /**
   * Shadow Standards
   */
  shadows: {
    sm: 'shadow-sm',
    default: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl',
    gold: 'dark:shadow-gold-500/20',
  },

  /**
   * Transition Standards
   */
  transitions: {
    fast: 'transition-all duration-150',
    default: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    colors: 'transition-colors duration-300',
  },
};

/**
 * Helper function to generate gradient background styles
 */
export const generateGradient = (from: string, to: string) => ({
  background: `linear-gradient(to bottom right, ${from}, ${to})`,
});

/**
 * Helper function to combine class names
 */
export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
