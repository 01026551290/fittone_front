'use server';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { sideBarApi } from '../api/side-bar.api';

async function MenuComponent() {
  const categories = await sideBarApi({ type: 'C' });
  return (
    <div className="w-64 bg-background">
      <h3 className="mb-4 text-lg font-semibold">Categories</h3>
      {categories.map(category => (
        <Link
          href={`/category?menuCd=${category.menu_cd}&menuNm=${category.menu_nm}`}
          key={category.menu_cd}
        >
          <Button
            variant="ghost"
            className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            key={'category' + category.menu_cd}
          >
            {category.menu_nm}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default MenuComponent;
