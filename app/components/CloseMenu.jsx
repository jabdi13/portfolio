export function CloseMenu({fill, hidden, onClick}) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={hidden ? 'sm:hidden' : ''} onClick={onClick}>
      <rect x="7.38464" y="21.6817" width="20.4853" height="1.70711" rx="0.853554" transform="rotate(-45 7.38464 21.6817)" fill={fill || '#9C9C9C'}/>
      <rect x="14.049" y="14.0314" width="2.36369" height="1.18184" rx="0.590922" fill={fill || '#9C9C9C'}/>
      <rect x="8.59167" y="7.33435" width="20.4853" height="1.70711" rx="0.853554" transform="rotate(45 8.59167 7.33435)" fill={fill || '#9C9C9C'}/>
    </svg>
  )
}