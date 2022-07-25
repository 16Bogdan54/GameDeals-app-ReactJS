import React from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Container from "../container/Container";
import { VscLinkExternal } from "react-icons/vsc";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Logo />
        <Nav>
          <li>
            <a
              href="https://github.com/16Bogdan54"
              rel="noreferrer"
              target="_blank"
            >
              Github
              <VscLinkExternal />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/BohdanYunakoff"
              rel="noreferrer"
              target="_blank"
            >
              Twitter <VscLinkExternal />
            </a>
          </li>
          <li>
            <a
              href="https://apidocs.cheapshark.com/#intro"
              rel="noreferrer"
              target="_blank"
            >
              API <VscLinkExternal />
            </a>
          </li>
        </Nav>
      </Container>
    </nav>
  );
}
