type MenuType = {
  id: number;
  title: string;
  content?: string | ReactNode;
  url: string;
};
interface MenuProps {
  title?: string;
  items: MenuType[];
  children?: ReactNode;
  style?: CSSProperties | undefined;
  childrenStyle?: CSSProperties | undefined;
}

export { MenuType, MenuProps };
