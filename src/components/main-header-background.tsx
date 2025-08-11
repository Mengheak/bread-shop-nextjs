export default function MainHeaderBackground() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
    >
      <defs>
        <linearGradient id="bg-coffee-bread" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a120b" />
          <stop offset="100%" stopColor="#2a1e14" />
        </linearGradient>

        <radialGradient id="coffee-glow" cx="30%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#8b4513" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="bread-glow" cx="70%" cy="65%" r="50%">
          <stop offset="0%" stopColor="#d9a066" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="v-coffee-bread" cx="50%" cy="50%" r="80%">
          <stop offset="60%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.45" />
        </radialGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#bg-coffee-bread)" />
      <rect width="1200" height="800" fill="url(#coffee-glow)" />
      <rect width="1200" height="800" fill="url(#bread-glow)" />

      <path
        d="M0,0 C300,200 900,50 1200,180 L1200,0 Z"
        fill="#3e2723"
        fillOpacity="0.9"
      />

      <g fill="#d9a066" fillOpacity="0.08">
        <ellipse cx="300" cy="500" rx="140" ry="80" />
        <path
          d="M160,500 q70,-90 140,0 q-70,90 -140,0 Z"
          fill="#d9a066"
          fillOpacity="0.05"
        />
      </g>

      <g fill="#8b4513" fillOpacity="0.07">
        <rect x="800" y="200" width="160" height="120" rx="20" />
        <path
          d="M960,240 h30 a25,25 0 0 1 0,50 h-30"
          fill="#8b4513"
          fillOpacity="0.07"
        />
      </g>

      <rect width="1200" height="800" fill="url(#v-coffee-bread)" />
    </svg>
  );
}
