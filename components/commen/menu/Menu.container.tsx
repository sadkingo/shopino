import React from "react";

import Menu from "./Menu.component";
import { MenuProps } from "./Menu";

const MenuContainer = ({ title, items, style, children }: MenuProps) => {
  return (
    <Menu title={title} items={items} style={style}>
      {children}
    </Menu>
  );
};

export default MenuContainer;
