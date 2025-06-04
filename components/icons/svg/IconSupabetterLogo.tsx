import React from 'react';

interface IconSupabetterLogoProps extends React.SVGProps<SVGSVGElement> {
  // No custom color prop needed, will be controlled by className
}

const IconSupabetterLogo: React.FC<IconSupabetterLogoProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 500 500"
      {...props} // Spread additional props like className, width, height, etc.
    >
      <path fill="currentColor" d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z" />
      <path fill="currentColor" d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z" />
      <path fill="currentColor" d="M252.762 204.455v92.089h-96.774v-92.089z" />
    </svg>
  );
};

export default IconSupabetterLogo;
