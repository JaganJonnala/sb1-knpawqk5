import React from 'react';

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2 rounded-lg border 
          ${error ? 'border-red-500' : 'border-gray-300'}
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
}