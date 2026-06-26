import { SiGoogle } from "react-icons/si";
import { iconClass, type IconProps } from "./icon-utils";

export function IconGoogle(props: IconProps) {
  return (
    <SiGoogle
      className={iconClass(props)}
      aria-hidden={props["aria-hidden"] ?? true}
    />
  );
}
