import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M39.467 6h-30.6c-1.5 0-2.7 1.2-2.7 2.55V39.3c0 1.35 1.2 2.55 2.7 2.55h30.6c1.5 0 2.7-1.2 2.7-2.55V8.55c0-1.35-1.2-2.55-2.7-2.55Zm-22.65 30.6h-5.25V19.5h5.25v17.1Zm-2.55-19.5c-1.65 0-3.15-1.35-3.15-3.15 0-1.8 1.35-3.15 3.15-3.15 1.65 0 3.15 1.35 3.15 3.15 0 1.8-1.5 3.15-3.15 3.15Zm22.65 19.35h-5.25v-8.4c0-1.95 0-4.65-2.85-4.65s-3.15 2.25-3.15 4.35v8.55h-5.25V19.5h4.95v2.25h.15c.75-1.35 2.55-2.85 5.1-2.85 5.4 0 6.45 3.6 6.45 8.25v9.3h-.15Z"
    />
  </svg>
);
export default SvgComponent;
