export function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    back: <path d="m15 18-6-6 6-6M9 12h11" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m16.2 7.8-2.5 5.9-5.9 2.5 2.5-5.9 5.9-2.5Z" /></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 12h8m-8-4h5" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.9M14 3.1a4 4 0 0 1 0 7.8" /><circle cx="10" cy="7" r="4" /></>,
    brain: <><path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7.5A3.5 3.5 0 0 0 12 18Zm0-13a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7.5A3.5 3.5 0 0 1 12 18" /><path d="M8 8h.01M16 8h.01M7 13h.01M17 13h.01" /></>,
    leaf: <><path d="M20 4c-8 0-14 2-14 9a7 7 0 0 0 7 7c7 0 7-8 7-16Z" /><path d="M4 21c2-5 6-8 12-11" /></>,
    sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
    external: <><path d="M14 3h7v7m0-7-11 11" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  }

  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.compass}</svg>
}

export function Illustration({ name, size = 60 }) {
  const illustrations = {
    heart: <><path d="M30 50 11 33C-1 20 17 7 30 20 43 7 61 20 49 33Z" fill="#ef7180" /><path d="m30 48-15-14c-8-8 3-17 11-9l4 4 4-4c8-8 19 1 11 9Z" fill="#ff9b9f" /><path d="m12 13 2 4m34-3-3 4M7 29l4 1" stroke="#e8b451" strokeWidth="3" strokeLinecap="round" /></>,
    sparkle: <><path d="m31 6 5 15 15 5-15 5-5 15-5-15-15-5 15-5Z" fill="#f3bd55" /><path d="m47 38 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="#ed7c88" /><circle cx="13" cy="14" r="4" fill="#68b7a2" /></>,
    arrow: <><path d="M15 48h30" stroke="#345f4c" strokeWidth="4" strokeLinecap="round" /><path d="M23 45V33h14v12" fill="#f0bd58" /><path d="M30 33V17" stroke="#478f78" strokeWidth="4" strokeLinecap="round" /><path d="m22 24 8-8 8 8m-8-8v16" fill="none" stroke="#478f78" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 48v5h22v-5" fill="#ed7c88" /></>,
    compass: <><circle cx="30" cy="30" r="23" fill="#d9eee5" /><circle cx="30" cy="30" r="17" fill="#fff" stroke="#478f78" strokeWidth="3" /><path d="m38 20-5 13-12 7 5-13Z" fill="#ed7180" /><circle cx="30" cy="30" r="3" fill="#345f4c" /><path d="M30 4v5m0 42v5M4 30h5m42 0h5" stroke="#e8b451" strokeWidth="3" strokeLinecap="round" /></>,
    message: <><path d="M9 13a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H23l-9 7v-7a5 5 0 0 1-5-5Z" fill="#77c4ae" /><path d="M18 18h14m-14 6h9" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><path d="M41 34h5a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5h-3" fill="#f4c15b" /></>,
    people: <><circle cx="22" cy="19" r="8" fill="#f0bd58" /><circle cx="41" cy="22" r="7" fill="#ed7c88" /><path d="M7 49v-7a13 13 0 0 1 26 0v7Z" fill="#68b7a2" /><path d="M34 36a11 11 0 0 1 16 10v3H36" fill="#8f9ce0" /><path d="M16 19a6 6 0 0 0 12 0" fill="#fff" opacity=".7" /></>,
    brain: <><path d="M29 12a9 9 0 0 0-16 6 9 9 0 0 0 1 16 9 9 0 0 0 15 7Zm2 0a9 9 0 0 1 16 6 9 9 0 0 1-1 16 9 9 0 0 1-15 7Z" fill="#ed9ba3" /><path d="M30 13v29M19 21c5 0 7 3 7 7m-8 7c4 0 7 2 7 6m17-20c-5 0-7 3-7 7m8 7c-4 0-7 2-7 6" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></>,
    leaf: <><path d="M47 10C27 10 12 15 12 32a16 16 0 0 0 16 16c17 0 19-18 19-38Z" fill="#68b7a2" /><path d="M10 51c6-12 15-19 29-26" fill="none" stroke="#345f4c" strokeWidth="4" strokeLinecap="round" /><path d="M31 19c-1 5 1 9 6 11M20 33c5-1 9 1 11 6" fill="none" stroke="#a9dfca" strokeWidth="3" strokeLinecap="round" /></>,
  }

  return <svg aria-hidden="true" className="illustration" width={size} height={size} viewBox="0 0 60 60" fill="none">{illustrations[name] ?? illustrations.sparkle}</svg>
}

export function ButtonLink({ children, onClick, secondary = false, small = false, type = 'button' }) {
  const className = ['button', secondary && 'button--secondary', small && 'button--small'].filter(Boolean).join(' ')
  return <button className={className} type={type} onClick={onClick}>{children}</button>
}

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>
}
