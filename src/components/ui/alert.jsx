// src/components/ui/alert.jsx
import React from 'react';

export const Alert = ({ children, className }) => (
  <div className={`p-4 rounded ${className}`}>
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <div>{children}</div>
);
