'use server';

import { Separator } from '@/components/ui/separator';

import StaticMenu from './static-menu';
import Recent from './recent';
import Category from './category';
import { Suspense } from 'react';

async function SideBar() {
  return (
    <aside className="w-64 mr-8 space-y-6">
      <StaticMenu />

      <Separator />

      <Recent />

      <Separator />

      <Category />

      <Separator />
    </aside>
  );
}

export default SideBar;
