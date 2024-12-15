import { useState, useCallback } from 'react';
import { showError } from '../utils/alerts';

export function useError() {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((error: unknown) => {
    const message = error instanceof Error ? error.message : 'An error occurred';
    setError(message);
    showError(message);
  }, []);

  return { error, handleError };
}