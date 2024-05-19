import { SVGProps } from 'react';

export const BurgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12ZM3 6a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6ZM3 18a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 18Z"
      clipRule="evenodd"
    />
  </svg>
);
