'use server';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Bell, User } from 'lucide-react';

async function CommonHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">FIT TONE</h1>
        <div className="relative max-w-[600px] w-full mx-4">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-8 w-full bg-secondary hover:bg-secondary/80"
            placeholder="Search Reddit"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default CommonHeader;
