import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { ICategory, IRecent } from './side-bar.interface';

export function useRecent(): IRecent {
  const query = useSearchParams();

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    if (query) {
      setTimeout(() => {
        const storedCategories = JSON.parse(localStorage.getItem('recentCategories') || '[]');
        setCategories(storedCategories);
      }, 1000);
    }
  }, [query]);

  return {
    categories,
  };
}
