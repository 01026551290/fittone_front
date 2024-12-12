import { ICategory, ISideBarProps } from '../model/side-bar.interface';

export async function sideBarApi({ type }: ISideBarProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${API_URL}/categories/type/${type}`, {
    cache: 'no-store',
  });
  const categories: ICategory[] = await response.json();

  return categories;
}
