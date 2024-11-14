// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, onClick, className, variant = 'default', size = 'md', disabled = false }) => {
  const variantClasses = variant === 'outline' ? 'border border-gray-300' : 'bg-blue-500 text-white';
  const sizeClasses = size === 'icon' ? 'p-2' : 'px-4 py-2';

  return (
    <button
      onClick={onClick}
      className={`rounded ${variantClasses} ${sizeClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
