import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const baseStyle = 'focus:outline-none font-bold py-2 px-6 py-3';
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  };

  const variantStyle = variantStyles[variant];

  return (
    <button
      type={type}
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
