import type { SVGProps } from "react";

export const Icons = {
  om: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Main Om curves */}
      <path d="M4.5 9.5c0-2.8 2.3-5 5.1-5 2.8 0 5.1 2.2 5.1 5v.2c0 2.8-2.3 5-5.1 5H8.3" />
      <path d="M12.5 9.2c.6-2.7 3-4.7 5.8-4.7 3.1 0 5.2 2.5 5.2 5.3" />
      <path d="M17.8 11.2c1.6.9 2.7 2.6 2.7 4.5 0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3" />

      {/* Om dot (bindu) */}
      <circle cx="16" cy="3.8" r="1" />
    </svg>
  ),
  tiger: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Ears */}
      <path d="M5.5 6.5c-.8-1.2-.6-2.6.6-3.4 1.2-.8 2.7-.3 3.3.9" />
      <path d="M18.5 6.5c.8-1.2.6-2.6-.6-3.4-1.2-.8-2.7-.3-3.3.9" />

      {/* Face outline */}
      <path d="M4 10.5c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5v2.5c0 4.2-3.6 7-8 7s-8-2.8-8-7Z" />

      {/* Eyes */}
      <path d="M9 11.5h.01" />
      <path d="M15 11.5h.01" />

      {/* Nose & mouth */}
      <path d="M12 13.2c.9 0 1.6-.5 1.6-1.1s-.7-1.1-1.6-1.1-1.6.5-1.6 1.1.7 1.1 1.6 1.1Z" />
      <path d="M12 13.2v1.3" />
      <path d="M10.6 15.2c.8.6 2 .6 2.8 0" />

      {/* Stripes */}
      <path d="M7.2 9.5l-1.6-1" />
      <path d="M8.2 10.8l-2.2-.6" />
      <path d="M16.8 9.5l1.6-1" />
      <path d="M15.8 10.8l2.2-.6" />
      <path d="M12 8.8v-2" />
    </svg>
  ),
  circle: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};
