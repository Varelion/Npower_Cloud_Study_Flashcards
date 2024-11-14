// src/components/ui/textarea.jsx
import React from 'react';

export const Textarea = ({ value, onChange, placeholder, rows }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className="border rounded p-2 w-full"
  />
);
