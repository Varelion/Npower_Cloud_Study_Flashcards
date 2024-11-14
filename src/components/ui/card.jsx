// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b mb-2">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="font-bold text-lg">{children}</h2>
);

export const CardContent = ({ children }) => <div>{children}</div>;
