export interface ICategory {
  menu_cd: string;
  menu_nm: string;
}

export interface ISideBarProps {
  type: 'S' | 'C';
}
export interface IMenuComponentProps extends ISideBarProps {
  title?: string;
}

export interface IRecent {
  categories: ICategory[];
}
