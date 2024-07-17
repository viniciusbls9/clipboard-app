// icon:face_sad | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function IconFaceSad(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.5 16.5a8 8 0 100-16 8 8 0 000 16z"
        />
        <path
          fill="currentColor"
          d="M7 6 A1 1 0 0 1 6 7 A1 1 0 0 1 5 6 A1 1 0 0 1 7 6 z"
        />
        <path
          fill="currentColor"
          d="M12 6 A1 1 0 0 1 11 7 A1 1 0 0 1 10 6 A1 1 0 0 1 12 6 z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 11.5c.603-1.333 1.603-2 3-2s2.397.667 3 2"
        />
      </g>
    </svg>
  );
}

export default IconFaceSad;
