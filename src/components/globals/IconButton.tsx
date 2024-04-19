// src/components/IconButton/index.tsx
import React from 'react';

interface IconButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full transition-colors duration-700 ease-linear bg-white border border-gray-300 focus:outline-none focus:ring focus:border-primary ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
