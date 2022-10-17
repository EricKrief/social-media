import BellIcon from "./Bell";
import MessageIcon from "./Message";
import MenuIcon from "./Menu";

const iconMap = {
  'bell': BellIcon,
  'message': MessageIcon,
  'menu': MenuIcon
}

export interface IconProps {
  name: keyof typeof iconMap;
}

export const Icon = ({ name }: IconProps) => {
  const ResolvedIcon = iconMap[name];
  return <ResolvedIcon />
}