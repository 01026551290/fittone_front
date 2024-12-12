'use client';

import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    'https://okefxubftcklwszsnhyy.supabase.co',
    process.env.NEXT_SUPABASE_PUBLIC_API_KEY || '',
  );
}
