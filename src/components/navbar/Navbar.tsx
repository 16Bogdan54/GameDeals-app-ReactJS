import Link from "../link/Link";
import Logo from "../logo/Logo";
import Navlinks from "../navlinks/Navlinks";
import { AiFillGithub, AiFillApi } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Navlinks>
        <Link href="https://github.com/16Bogdan54">
          <AiFillGithub />
        </Link>
        <Link href="https://apidocs.cheapshark.com/#intro">
          <AiFillApi />
        </Link>
      </Navlinks>
    </nav>
  );
};

export default Navbar;
