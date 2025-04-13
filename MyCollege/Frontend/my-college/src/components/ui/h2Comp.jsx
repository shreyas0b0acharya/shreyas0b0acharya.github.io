// components/headingTags.js

const baseStyles = "text-black dark:text-white font-bold";

export const H1 = ({ children, className = "" }) => (
  <h1 className={`${baseStyles} text-2xl ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = "" }) => (
  <h2 className={`${baseStyles} text-xl ${className}`}>{children}</h2>
);

export const H3 = ({ children, className = "" }) => (
  <h3 className={`${baseStyles} text-lg ${className}`}>{children}</h3>
);

export const H4 = ({ children, className = "" }) => (
  <h4 className={`${baseStyles} text-base ${className}`}>{children}</h4>
);

export const H5 = ({ children, className = "" }) => (
  <h5 className={`${baseStyles} text-sm ${className}`}>{children}</h5>
);

export const H6 = ({ children, className = "" }) => (
  <h6 className={`${baseStyles} text-xs font-normal ${className}`}>{children}</h6>
);
