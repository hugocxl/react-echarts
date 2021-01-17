"use strict";

import "./index.css";
import * as examples from "./collection";
import { Switch, Route, Link } from "react-router-dom";

import * as ReactEcharts from "@hcorta/react-echarts";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/shadesOfPurple";

const scope = { ...ReactEcharts, Math };

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
          <LiveProvider code={code} scope={scope}>
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
      <>
        <Switch>
          {routerItems}
          <div className="react_echarts__gallery">{galleryItems}</div>
        </Switch>
      </>
    );
  },
};

function GalleryDetail({ label, code, style = {} }) {
  return (
    <div className={"react_echarts__gallery_detail"}>
      <h2 id={label}>{label}</h2>
      <LiveProvider code={code} scope={scope}>
        <LivePreview
          style={{
            height: 300,
            marginBottom: 20,
            borderRadius: "var(--border-radius)",
            overflow: "hidden",
            ...style,
          }}
        />
        <LiveEditor theme={theme} className={"item_code"} />
      </LiveProvider>
    </div>
  );
}
