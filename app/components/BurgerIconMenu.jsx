export function BurgerIconMenu({ fill, hidden, onClick, onKeyDown, tabIndex, role, ariaLabel, ariaExpanded }) {
  return (
    <svg
      width="40"
      height="35"
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-500 focus-visible:ring-offset-2 rounded ${hidden ? 'sm:hidden' : ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
    >
      <rect x="6.76923" y="8.93848" width="27.0769" height="1.97436" rx="0.98718" fill={fill || '#9C9C9C'} />
      <rect x="6.76923" y="16.0461" width="27.0769" height="1.97436" rx="0.987178" fill={fill || '#9C9C9C'} />
      <rect x="6.76923" y="23.5487" width="27.0769" height="1.97436" rx="0.98718" fill={fill || '#9C9C9C'} />
    </svg>
  )
}