import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const Link = ({ href, children }: Props) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

export default Link;
