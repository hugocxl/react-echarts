import { useMemo } from "react";
import * as pages from "pages";
import { NavLink, Link } from "react-router-dom";
const root = document.documentElement;
import logo from "../../../../public/img/logo.png";
import github from "../../../../public/img/github-icon.svg";
import "./index.css";

export function Header() {
  const headerLinks = useMemo(getLinks, []);

  function getLinks() {
    const links = [];
    for (let page in pages) {
      const { route: path, label, component, ...rest } = pages[page];

      if (label === "Home") break;
      links.push(
        <NavLink key={path} {...rest} to={path}>
          {label}
        </NavLink>
      );
    }
    return links.sort((a, b) => {
      if (a.order < b.order) return 1;
      return -1;
    });
  }

  function onClickTheme() {
    root.style.setProperty("--background-color", "black");
    root.style.setProperty("--font-color", "white");
  }

  return (
    <header>
      <Link
        to="/"
        style={{
          padding: 0,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} style={{ height: "80%" }} />
        <span style={{ fontWeight: "bolder", fontSize: 24, marginLeft: 8 }}>
          React ECharts
        </span>
      </Link>

      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {headerLinks}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/hcorta/react-echarts"}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={github} style={{ height: "35%" }} />
        </a>
      </div>
    </header>
  );
}
