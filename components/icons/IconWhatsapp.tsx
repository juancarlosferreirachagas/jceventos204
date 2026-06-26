import { FaWhatsapp } from "react-icons/fa6";
import { iconClass, type IconProps } from "./icon-utils";

export function IconWhatsapp(props: IconProps) {
  return (
    <FaWhatsapp
      className={iconClass(props)}
      aria-hidden={props["aria-hidden"] ?? true}
    />
  );
}
