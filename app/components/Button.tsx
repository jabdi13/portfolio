import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { designTokens, cn } from '../styles/design-tokens';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  withLift?: boolean;
  withShadow?: boolean;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never;
  target?: never;
  download?: never;
}

interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
  href: string;
  target?: string;
  download?: boolean | string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Reusable Button Component
 *
 * Provides consistent styling across all buttons in the portfolio.
 * Supports multiple variants, sizes, and can render as button or link.
 *
 * @example
 * // Primary CTA button
 * <Button variant="primary" size="lg" href="#contact">Let's Talk</Button>
 *
 * // Outline button with icon
 * <Button variant="outline" size="md" icon={<ArrowIcon />}>View Projects</Button>
 *
 * // Small button for project cards
 * <Button variant="primary" size="sm" href="https://example.com" target="_blank">View Live</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  withLift = true,
  withShadow = true,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variantClasses = designTokens.buttons.variants[variant];
  const sizeClasses = designTokens.buttons.sizes[size];

  const buttonClasses = cn(
    // Base styles
    'inline-flex items-center justify-center gap-2',
    designTokens.borderRadius.button,
    'font-semibold',
    'disabled:opacity-50 disabled:cursor-not-allowed',

    // Variant styles
    variantClasses.base,
    variantClasses.hover,
    variantClasses.focus,
    variantClasses.transition,

    // Size styles
    sizeClasses,

    // Optional effects
    withLift && designTokens.buttons.effects.lift,
    withShadow && designTokens.buttons.effects.shadow,

    // Full width
    fullWidth && 'w-full',

    // Custom classes
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  // Render as link if href is provided
  if ('href' in props && props.href) {
    const { href, target, download, ...linkProps } = props;

    // External link
    if (href.startsWith('http') || href.startsWith('//')) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={buttonClasses}
          {...(linkProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    // Internal link (Next.js Link)
    return (
      <Link
        href={href}
        target={target}
        download={download}
        className={buttonClasses}
        {...(linkProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type="button"
      className={buttonClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
