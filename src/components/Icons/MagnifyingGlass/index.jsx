export default function MagnifyingGlass() {
    return (
      <svg fill="none" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.667 25.667l-5-5m-14.334-6a8.333 8.333 0 1116.667 0 8.333 8.333 0 01-16.667 0z"
          stroke="url(#a)"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="6.333"
            x2="25.667"
            y1="16"
            y2="16"
          >
            <stop stopColor="#C98CF1" />
            <stop offset="1" stopColor="#7B78E5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }