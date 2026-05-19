import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyle = "font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-sm flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-maroon text-white hover:bg-brand-maroonDark",
    secondary: "bg-brand-green text-white hover:bg-opacity-90",
    outline: "bg-transparent border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};