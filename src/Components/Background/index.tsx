import { ReactNode } from "react";
import Theme from "./styles";

type IBackground = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackground) => {
  return <Theme color={props.color ?? "#2C2C2C"}>{props.children}</Theme>;
};

export default Background;
