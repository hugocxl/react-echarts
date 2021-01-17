"use strict";

import * as ReactEcharts from "@hcorta/react-echarts";
import * as examples from "./collection";
import { Switch, Route, Link } from "react-router-dom";
import { CodeBlock } from "components";
import { LiveProvider, LivePreview } from "react-live";

import "./index.css";

export const Examples = {
  label: "Gallery",
  route: "/gallery",
  order: 2,
  component: (props) => {
    const galleryItems = [];
    const routerItems = [];

    for (let example in examples) {
      const { code, label, subLabel, style, id } = examples[example];
      const path = "/gallery/" + id;

      routerItems.push(
        <Route key={id} path={path}>
          <GalleryDetail {...examples[example]} />
        </Route>
      );

      galleryItems.push(
        <Link
          to={path}
          id={id}
          className={"react_echarts__gallery_item"}
          style={style}
        >
          <LiveProvider code={code} scope={{ ...ReactEcharts }}>
            <LivePreview className={"item_preview"} />
          </LiveProvider>
          <div className={"item_text"}>
            <span>{label}</span>
            <span className={"item_text_type"}>{subLabel}</span>
          </div>
        </Link>
      );
    }

    return (
      <Switch>
        {routerItems}
        <div className="react_echarts__gallery">{galleryItems}</div>
      </Switch>
    );
  },
};

function GalleryDetail({ label, ...rest }) {
  return (
    <div className={"react_echarts__gallery_detail"}>
      <h2 id={label} style={{ margin: 0 }}>
        {label}
      </h2>
      <CodeBlock preview={true} {...rest} />
    </div>
  );
}
