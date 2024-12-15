import * as React from 'react';

type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {
  return (
    <label className="text-red-600 text-sm mt-1">
      {message}
    </label>
  );
}