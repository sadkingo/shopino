import { MenuType } from "../menu/Menu";

const ProfileMenuItems: MenuType[] = [
  {
    id: 0,
    title: "Profile",
    url: "/profile",
  },
  {
    id: 1,
    title: "Logout",
    url: "/logout",
  },
];

const NAVBAR_HIGHT = 8;

export { ProfileMenuItems, NAVBAR_HIGHT };
