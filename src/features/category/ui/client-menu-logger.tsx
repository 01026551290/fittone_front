'use client';

import { IMenuLoggerProps } from '../model/menu-logger.interface';
import { useClientMenuLogger } from '../model/use-client-menu-logger';
export function ClientMenuLogger({ menuCd, menuNm }: IMenuLoggerProps) {
  useClientMenuLogger({ menuCd, menuNm });
  return null;
}
