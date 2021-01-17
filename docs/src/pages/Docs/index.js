"use strict";

import "./index.css";
import { CodeBlock } from "components";
import * as codeBlocks from "./codeBlocks";

function TableRow({ children }) {
  return (
    <tr>
      {children.map((el, i) => {
        if (i) {
          return <td>{el}</td>;
        } else {
          return (
            <td>
              <strong>
                <code>{el}</code>
              </strong>
            </td>
          );
        }
      })}
    </tr>
  );
}

export const Docs = {
  label: "Docs",
  route: "/docs",
  order: 1,
  component: (props) => {
    return (
      <div className={"react_echarts__docs"}>
        <div className={"react_echarts__docs__sidebar"}>
          <a href={"#installation"}>Installation</a>
          <a href={"#usage"}>Usage</a>
          <ul>
            <li>
              <a href={"#components"}>Components</a>
            </li>
            <li>
              <a href={"#hooks"}>Hooks</a>
              <ul>
                <li>useEcharts</li>
              </ul>
            </li>
            <li>
              <a href={"#props"}>Props</a>
            </li>
          </ul>
        </div>

        <div className={"react_echarts__docs__content"}>
          <h2 style={{ marginTop: 0 }} id={"installation"}>
            Installation
          </h2>
          <p>
            In order to use{" "}
            <code>
              <strong>react-echarts</strong>
            </code>
            , all you need to do is install the npm package:
          </p>
          <pre>yarn add @hcorta/react-echarts</pre>

          <h2 id={"usage"}>Usage</h2>
          <p>
            Import any of the exported elements and you'll be ready to go. A
            simple use case would look like this:
          </p>
          <CodeBlock code={codeBlocks.quickExample} />

          <p>
            While some props have been provided to facilitate specific use cases
            (single series mostly), most of them follow the {""}
            <a href="https://echarts.apache.org/next/en/option.html#title">
              ECharts option object schema
            </a>
            {""} throught an option-key-like prop declaration. This means that
            you may use any of the keys of this option object as props in your
            component.
          </p>

          <p>The following examples are equivalent:</p>
          <CodeBlock code={codeBlocks.comparison} />

          <blockquote>
            <h4>The "option" prop</h4>
            The option prop allows you to pass an ECharts option object directly
            to your component. If so, I'd recommend{" "}
            <strong>using the generic {`<Chart />`} component</strong>, as the
            rest of exported charts usually apply some transformations over the
            option object.
            <br />
            <br />
            In case it is passed down to the component, the rest of option-like
            props will be ommited.
          </blockquote>

          <p>
            For more examples, check out the <a href={"/gallery"}>gallery</a>
          </p>

          <h3 id={"components"}>Components</h3>
          <p>The library exports the following React components:</p>
          <pre>{codeBlocks.exportedComponents}</pre>

          <blockquote>
            <h4>
              Difference between <code>{"<Chart />"}</code> and the rest of
              components
            </h4>

            <p>
              As explained before, the <code>{`<Chart />`}</code> component does
              not apply any conversion to the option object, while the rest of
              exported components do (e.g: it injects the type in the series
              object). Consider it a generic component. It is recommended to be
              used for the following cases:
            </p>

            <ul>
              <li>Using the option prop</li>
              <li>
                Declaring the type trought the series (e.g: having 2 different
                serie types in the same chart)
              </li>
              <li>
                More complex scenarios (e.g: chart types changing dynamically).
              </li>
            </ul>
          </blockquote>

          <h3 id={"hooks"}>Hooks</h3>

          <h4>
            <li>
              <code>useEcharts</code>
            </li>
          </h4>

          <p>
            It exposes those methods provided by the ECharts core library. It
            comes handful when you need, for example, to connect charts or
            register a new theme.
          </p>

          <table>
            <thead>
              <th>Method</th>
              <th>Description</th>
              <th>Parameters</th>
            </thead>
            <tbody>
              <TableRow>
                {[
                  `connect`,
                  `Connects interaction of multiple chart series`,
                  <span>
                    <code>(group: String or Array)</code> Group id, or array of
                    chart instances
                  </span>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `disconnect`,
                  `Disconnects interaction of multiple chart series`,
                  <span>
                    <code>(group: String or Array)</code> Group id, or array of
                    chart instances
                  </span>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `getInstanceByDom`,
                  `Returns chart instance of dom container.`,
                  <code>
                    {`(target: HTMLDivElement or HTMLCanvasElement) => ECharts`}
                  </code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `getMap`,
                  `Returns a registered map.`,
                  <code>{`(mapName: string) => {Object}`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `registerMap`,
                  `Registers available maps.`,
                  <code>{`(mapName: string, geoJson: {Object}, specialAreas?: {Object}`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `registerTheme`,
                  `Registers a theme.`,
                  <code>{`(themeName: string, theme: {Object})`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `registerAction`,
                  `Registers an action.`,
                  <code>{`(actionName: string, callback: {Function})`}</code>,
                ]}
              </TableRow>
            </tbody>
          </table>

          <p>A simple use case would look like this:</p>

          <CodeBlock code={codeBlocks.useEchartsExample} />

          <h3 id={"props"}>Props</h3>
          <p>
            The following props, grouped by category, are available for all
            components exported by the library.
          </p>

          <h3>Common</h3>

          <p>Common props of the component</p>

          <table>
            <thead>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </thead>
            <tbody>
              <TableRow>
                {[
                  `style`,
                  <code>{`{Object}`}</code>,
                  "Styles applied to the container",
                  <code>{"{}"}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `className`,
                  <code>{`{String}`}</code>,
                  "Classname of the container",
                  <code>{`""`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `height`,
                  <code>{`{Number} of {String}`}</code>,
                  "Height of the container",
                  <code>{`100%`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `width`,
                  <code>{`{Number} of {String}`}</code>,
                  "Width of the container",
                  <code>{`100%`}</code>,
                ]}
              </TableRow>
            </tbody>
          </table>

          <CodeBlock code={codeBlocks.commonPropsExample} />

          <h3>State</h3>
          <p>State-related props</p>

          <table>
            <thead>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </thead>
            <tbody>
              <TableRow>
                {[
                  `shouldUpdate`,
                  <code>{`{Function}`}</code>,
                  " Callback to control whether the component should update or not.",
                  <code>{`() => true`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `isLoading`,
                  <code>{`{Boolean}`}</code>,
                  "Whether the component is loading. When is set to true, the loading component is shown.",
                  <code>{`false`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `isMounting`,
                  <code>{`{Boolean}`}</code>,
                  "Whether the component is mounting. When is set to true, the skeleton component is shown.",
                  <code>{`false`}</code>,
                ]}
              </TableRow>
            </tbody>
          </table>

          <CodeBlock code={codeBlocks.statePropsExample} />

          <h3>Custom components</h3>

          <table>
            <thead>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </thead>
            <tbody>
              <TableRow>
                {[
                  `loadingComponent`,
                  <code>{`{Component}`}</code>,
                  " Custom loading component",
                  <code>{`<Loading />`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `loadingProps`,
                  <code>{`{Object}`}</code>,
                  "Props spreaded to the loading component, both default or custom if passed",
                  <code>{`{}`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `skeletonComponent`,
                  <code>{`{Component}`}</code>,
                  " Custom skeleton component",
                  <code>{`<Skeleton />`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `skeletonProps`,
                  <code>{`{Object}`}</code>,
                  "Props spreaded to the skeleton component, both default or custom if passed",
                  <code>{`{}`}</code>,
                ]}
              </TableRow>
            </tbody>
          </table>

          <h3>ECharts</h3>

          <table>
            <thead>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </thead>
            <tbody>
              <TableRow>
                {[
                  `option`,
                  <code>{`{Object}`}</code>,
                  "The ECharts option config, can see https://echarts.apache.org/option.html#title.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `notMerge`,
                  <code>{`{Boolean}`}</code>,
                  "Whether or not to merge with previous option",
                  <code>{`false`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `lazyUpdate`,
                  <code>{`{Component}`}</code>,
                  " Whether or not to update the chart inmediately",
                  <code>{`false`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `silent`,
                  <code>{`{Boolean}`}</code>,
                  "States whether not to prevent triggering events when calling setOption",
                  <code>{`false`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `theme`,
                  <code>{`{String} or {Object}`}</code>,
                  "Theme to be applied. This can be a configuring object of a theme, or a theme name registered",
                  <code>{`null`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `group`,
                  <code>{`{String}`}</code>,
                  "Group name to be used in chart connection.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `renderer`,
                  <code>{`{String}`}</code>,
                  "Renderer method. Supports 'canvas' or 'svg'.",
                  <code>{`svg`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `getInstance`,
                  <code>{`{Function}`}</code>,
                  "Callback called on mount that returns the ECharts instance of the component ",
                  <code>{`(ECharts) => null`}</code>,
                ]}
              </TableRow>

              <TableRow>
                {[
                  `getRef`,
                  <code>{`{Function}`}</code>,
                  "Callback called on mount that returns the ref of the container",
                  <code>{`(containerRef) => null`}</code>,
                ]}
              </TableRow>
            </tbody>
          </table>

          <h3>Events</h3>

          <table>
            <thead>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </thead>
            <tbody>
              <TableRow>
                {[
                  `onMount`,
                  <code>{`{Function}`}</code>,
                  "Callback called on mount",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onUpdate`,
                  <code>{`{Function}`}</code>,
                  `Callback called whenever the component is updated. Relates to "shouldUpdate"`,
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onUnmount`,
                  <code>{`{Function}`}</code>,
                  "Callback called on unmounted",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onRendered`,
                  <code>{`{Function}`}</code>,
                  "Trigger when a frame rendered. Notice that the rendered event does not indicate that the animation finished",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onFinished`,
                  <code>{`{Function}`}</code>,
                  "Triggered when render finished, that is, when animation",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onClick`,
                  <code>{`{Function}`}</code>,
                  "Event of chart click",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onDoubleClick`,
                  <code>{`{Function}`}</code>,
                  "Event of double chart click",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onMouseDown`,
                  <code>{`{Function}`}</code>,
                  "Event of mouse down chart",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onMouseMove`,
                  <code>{`{Function}`}</code>,
                  "Event of mouse move chart",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onMouseUp`,
                  <code>{`{Function}`}</code>,
                  "Event of mouse up chart",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onMouseOver`,
                  <code>{`{Function}`}</code>,
                  "Event of mouse over chart",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onMouseOut`,
                  <code>{`{Function}`}</code>,
                  "Event of mouse out chart",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onGlobalOut`,
                  <code>{`{Function}`}</code>,
                  "Event of global out chart",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onContextMenu`,
                  <code>{`{Function}`}</code>,
                  "Event of context menu",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onHighlight`,
                  <code>{`{Function}`}</code>,
                  "Event of data highlight.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onDownplay`,
                  <code>{`{Function}`}</code>,
                  "Event of data downplay.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onSelectChanged`,
                  <code>{`{Function}`}</code>,
                  "Event emitted when data selection is changed.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onLegendSelectChanged`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after legend selecting state changes",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onLegendSelected`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after legend is selected.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onLegendUnselected`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after unselecting legend.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onLegendInverseSelect`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after all legends are selected.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onLegendInverseSelect`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after inversing all legends.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onLegendScroll`,
                  <code>{`{Function}`}</code>,
                  "Event when trigger legend scroll.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onDataZoom`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after zooming data area.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onDataRangeSelected`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after range is changed in visualMap.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onTimelineChanged`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after time point in timeline is changed.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onRestore`,
                  <code>{`{Function}`}</code>,
                  "Resets option event",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onDataViewChanged`,
                  <code>{`{Function}`}</code>,
                  "Changing event of data view tool in toolbox",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onMagicTypeChanged`,
                  <code>{`{Function}`}</code>,
                  "Switching event of magic type tool in toolbox",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onGeoSelectChanged`,
                  <code>{`{Function}`}</code>,
                  "Event emitted after selecting state changes",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onGeoUnselected`,
                  <code>{`{Function}`}</code>,
                  "Cancels selected event.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onAxisAreaSelected`,
                  <code>{`{Function}`}</code>,
                  "Selecting event of range of parallel axis.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onFocusNodeadJacency`,
                  <code>{`{Function}`}</code>,
                  "Adjacent nodes highlight event in graph.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onUnfocusNodeAdjacency`,
                  <code>{`{Function}`}</code>,
                  "Adjacent nodes reverse-highlight event in graph.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onBrush`,
                  <code>{`{Function}`}</code>,
                  "Event triggered after action brush dispatched.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onBrushEnd`,
                  <code>{`{Function}`}</code>,
                  "Event triggered after action brushEnd dispatched",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onBrushSelected`,
                  <code>{`{Function}`}</code>,
                  "Event triggered after action brushEnd dispatched.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
              <TableRow>
                {[
                  `onGlobalCursorTaken`,
                  <code>{`{Function}`}</code>,
                  "Event triggered after action global cursor taken dispatched.",
                  <code>{`null`}</code>,
                ]}
              </TableRow>
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};
