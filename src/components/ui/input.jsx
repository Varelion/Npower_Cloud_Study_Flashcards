// src/components/ui/input.jsx
import React from 'react';

export const Input = ({ value, onChange, placeholder, type = 'text', disabled = false }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    className="border rounded p-2 w-full"
  />
);
