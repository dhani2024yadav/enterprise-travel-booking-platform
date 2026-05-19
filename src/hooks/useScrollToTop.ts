import { useEffect } from 'react';

export function useScrollToTop(dep?: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [dep]);
}
