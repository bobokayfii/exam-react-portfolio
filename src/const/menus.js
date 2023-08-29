import {
  Dashboard,
  Experiences,
  Messages,
  Portfolios,
  Skills,
  Users,
} from "../pages/admin";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsDiagram3Fill, BsJournalPlus } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { ROLE } from "../utils";

const routes = [
  {
    url: "dashboard",
    page: Dashboard,
    icon: <MdOutlineDashboardCustomize />,
    label: "Dashboard",
  },
  {
    url: "users",
    page: Users,
    icon: <RiUserSettingsLine />,
    label: "Users",
  },
  {
    url: "experiences",
    page: Experiences,
    icon: <BsDiagram3Fill />,
    label: "Experiences",
  },
  {
    url: "education",
    page: Messages,
    icon: <TbMessages />,
    label: "Education",
  },
  {
    url: "portfolios",
    page: Portfolios,
    icon: <BsJournalPlus />,
    label: "Portfolios",
  },
  {
    url: "skills",
    page: Skills,
    icon: <GiSkills />,
    label: "Skills",
  },
];

let hiddenRoutes = ROLE === "client" ? ["users"] : [];

export const adminRoutes = routes.filter(
  (route) => !hiddenRoutes.includes(route.url)
);
