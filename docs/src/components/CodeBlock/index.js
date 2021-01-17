"use strict";

import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/shadesOfPurple";
import * as ReactEcharts from "@hcorta/react-echarts";
import "./index.css";

export function CodeBlock({ preview, style = {}, ...rest }) {
  return (
    <LiveProvider scope={{ ...ReactEcharts }} {...rest}>
      {preview && (
        <LivePreview
          style={{
            height: 300,
            marginBottom: 20,
            borderRadius: "var(--border-radius)",
            overflow: "hidden",
            ...style,
          }}
        />
      )}
      <LiveEditor theme={theme} className={"react_echarts__code_block"} />
    </LiveProvider>
  );
}
