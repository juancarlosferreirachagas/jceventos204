import { FaInstagram } from "react-icons/fa6";
import { iconClass, type IconProps } from "./icon-utils";

export function IconInstagram(props: IconProps) {
  return (
    <FaInstagram
      className={iconClass(props)}
      aria-hidden={props["aria-hidden"] ?? true}
    />
  );
}
