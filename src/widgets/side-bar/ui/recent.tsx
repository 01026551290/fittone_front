'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRecent } from '../model/use-recent';

function Recent() {
  const { categories } = useRecent();
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="w-64 bg-background">
      <h3 className="mb-4 text-lg font-semibold">Recent</h3>
      {categories.map((category, index) => (
        <Button
          variant="ghost"
          className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          key={'recent' + index}
        >
          <Link href={`/category?menuCd=${category.menu_cd}&menuNm=${category.menu_nm}`}>
            {category.menu_nm}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default Recent;
