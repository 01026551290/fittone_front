import { useEffect } from 'react';

import { IMenuLoggerProps } from './menu-logger.interface';

export function useClientMenuLogger({ menuCd, menuNm }: IMenuLoggerProps) {
  useEffect(() => {
    // 로컬스토리지에 메뉴 정보를 추가
    const recentCategories = JSON.parse(localStorage.getItem('recentCategories') || '[]');

    const existingIndex = recentCategories.findIndex(
      (category: { menu_cd: string }) => category.menu_cd === menuCd,
    );

    if (existingIndex > -1) {
      // 기존 메뉴가 있으면 해당 항목을 제거하고 맨 앞으로 이동
      recentCategories.splice(existingIndex, 1);
    }

    // 새로운 메뉴를 맨 앞에 추가
    recentCategories.unshift({ menu_cd: menuCd, menu_nm: menuNm });

    // 최대 4개 4개 이상이면 4개 이상것들은 다 삭제
    if (recentCategories.length > 4) {
      recentCategories.splice(4, recentCategories.length - 4);
    }

    // 로컬스토리지에 저장
    localStorage.setItem('recentCategories', JSON.stringify(recentCategories));
  }, [menuCd, menuNm]);
}
