import "./index.css";
import { NavLink, Link } from "react-router-dom";
import background from "../../../../public/img/logo.png";
import * as samples from "../Gallery/collection";
import { LiveProvider, LivePreview } from "react-live";
import * as ReactEcharts from "@hcorta/react-echarts";

const scope = { ...ReactEcharts, Math };

export const Home = {
  label: "Home",
  route: "",
  order: 0,
  exact: true,
  component: (props) => {
    const galleryItems = [];

    for (let sample in samples) {
      if (galleryItems.length === 4) break;
      const { code, label, subLabel, style, id } = samples[sample];
      const path = "/gallery/" + id;

      galleryItems.push(
        <Link
          to={path}
          id={id}
          className={"react_echarts__gallery_item"}
          style={style}
        >
          <LiveProvider code={code} scope={scope}>
            <LivePreview className={"item_preview"} />
          </LiveProvider>
        </Link>
      );
    }

    return (
      <div className={"react_echarts__home"}>
        <div className={"react_echarts__home__description"}>
          <span>
            <span
              style={{
                fontWeight: "bold",
                color: "var(--font-color)",
              }}
            >
              React ECharts
            </span>{" "}
            is a simple and declarative set of React components built on top of
            ECharts
          </span>

          <p>
            <a href="https://echarts.apache.org/en/index.html">ECharts</a> is a
            pure Javascript chart library, providing intuitive, vivid,
            interactive, highly personalized and customized data visualization
            charts.
          </p>

          <p>
            <code>
              <strong>react-echarts</strong>
            </code>{" "}
            is an abstraction library built with React on top of ECharts. It
            exposes a set of components for developers that can be combined to
            set up amazing charts in their applications.
          </p>

          <p>
            Main principles of <strong>React ECharts</strong> are:
          </p>

          <ol>
            <li>
              <strong>Simple:</strong> React ECharts makes it easy to generate
              ECharts components by wrapping the code required to render the
              entire chart.
            </li>
            <li>
              <strong>Customizable:</strong> A simple options-structure allows
              for deep customization.
            </li>
            <li>
              <strong>Declarative:</strong> Purely presentational components. In
              most cases, charts look and behave exactly as you need without
              modifications.
            </li>
          </ol>

          <br />
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Made with ❤️ by
            <a
              href={"https://github.com/hcorta"}
              style={{ marginRight: 20, marginLeft: 4 }}
            >
              <strong>Hugo Corta</strong>
            </a>
            <a href="https://www.buymeacoffee.com/hcorta" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{ height: 30, width: 110 }}
              />
            </a>
          </p>
        </div>

        <div className={"react_echarts__home__cards"}>
          {galleryItems}
          <NavLink to={"/gallery"} id={"react_echarts__home__cards_link"}>
            <button style={{ width: "100%", height: "100%" }}>Gallery</button>
          </NavLink>
        </div>
      </div>
    );
  },
};
