type MenuType = {
  id: number;
  title: string;
  url: string;
};
interface MenuProps {
  title?: string;
  items: MenuType[];
  children: ReactNode;
  style?: CSSProperties | undefined;
  childrenStyle?: CSSProperties | undefined;
}

export { MenuType, MenuProps };
