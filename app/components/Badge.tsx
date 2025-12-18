import { ReactNode } from 'react';
import { designTokens, cn } from '../styles/design-tokens';

type BadgeVariant = 'tech' | 'status';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

/**
 * Reusable Badge Component
 *
 * Provides consistent styling for badges/tags across the portfolio.
 * Primary use case is tech stack badges in project cards.
 *
 * Features:
 * - Consistent powder blue color palette
 * - Full dark mode support
 * - Hover effect for engagement
 * - Replaces hardcoded bg-sky-600/50 styles
 *
 * @example
 * // Tech badge (default)
 * <Badge>React</Badge>
 *
 * // Status badge
 * <Badge variant="status">In Progress</Badge>
 *
 * // Custom styling
 * <Badge className="text-sm">TypeScript</Badge>
 */
export function Badge({
  children,
  variant = 'tech',
  className = ''
}: BadgeProps) {
  const variantStyles = designTokens.badges[variant];

  const badgeClasses = cn(
    // Base styles
    variantStyles.base,
    variantStyles.colors,
    'text' in variantStyles && variantStyles.text,

    // Hover effect for tech badges
    variant === 'tech' && 'hover' in variantStyles && variantStyles.hover,

    // Custom classes
    className
  );

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
}
