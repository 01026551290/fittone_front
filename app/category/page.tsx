import { MainList } from '@/views/main/ui/main-list';
import { ClientMenuLogger } from '@/features/category';
export default function Page({
  searchParams,
}: {
  searchParams: {
    menuCd: string;
    menuNm: string;
  };
}) {
  return (
    <>
      <MainList />
      <ClientMenuLogger menuCd={searchParams.menuCd} menuNm={searchParams.menuNm} />
    </>
  );
}
