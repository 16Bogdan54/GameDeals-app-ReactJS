import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Navlinks = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Navlinks;
