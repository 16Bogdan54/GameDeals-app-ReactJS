import React, { Component } from "react";
import Container from "../container/Container";
import Nav from "../nav/Nav";
import { VscLinkExternal } from "react-icons/vsc";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <div className="sign">
            <h3>
              Made by <a href="https://github.com/16Bogdan54">Bohdan Yunakov</a>
            </h3>
            <span>
              API by <a href="https://www.cheapshark.com/">Cheap Shark</a>
            </span>
          </div>
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
      </footer>
    );
  }
}
