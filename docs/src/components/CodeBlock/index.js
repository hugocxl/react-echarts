"use strict";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/shadesOfPurple";
import "./index.css";
import * as ReactEcharts from "@hcorta/react-echarts";

const scope = { ...ReactEcharts };

export function CodeBlock({ code }) {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor theme={theme} className={"react_echarts__code_block"} />
    </LiveProvider>
  );
}
