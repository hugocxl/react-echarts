"use strict";

import "./index.css";
import * as examples from "./collection";
import * as ReactEcharts from "@hcorta/react-echarts";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/shadesOfPurple";

export const Examples = {
  label: "Gallery",
  route: "/gallery",
  order: 2,
  component: (props) => {
    const galleryItems = [];

    for (let example in examples) {
      const { code, label, background } = examples[example];
      const scope = { ...ReactEcharts };

      galleryItems.push(
        <div className={"react_echarts__gallery_item"} style={{ background }}>
          <span id={label}>{label}</span>
          <LiveProvider code={code} scope={scope}>
            <LivePreview className={"item_preview"} />
          </LiveProvider>
        </div>
      );
    }

    return <div className="react_echarts__gallery">{galleryItems}</div>;
  },
};
