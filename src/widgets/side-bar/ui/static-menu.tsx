'use server';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { sideBarApi } from '../api/side-bar.api';

async function StaticMenu() {
  const staticMenus = await sideBarApi({ type: 'S' });

  return (
    <nav className="space-y-2">
      <Button
        variant="ghost"
        className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Link href={`/`}>Home</Link>
      </Button>
      <Button
        variant="ghost"
        className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Link href={`/trend`}>Trend</Link>
      </Button>
    </nav>
  );
}

export default StaticMenu;
