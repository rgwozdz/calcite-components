import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "calcite",
  bundles: [
    { components: ["calcite-accordion", "calcite-accordion-item"] },
    { components: ["calcite-alert"] },
    { components: ["calcite-button"] },
    { components: ["calcite-card"] },
    { components: ["calcite-chip"] },
    { components: ["calcite-combobox"] },
    {
      components: [
        "calcite-date",
        "calcite-date-month",
        "calcite-date-month-header",
        "calcite-date-day",
      ],
    },
    {
      components: [
        "calcite-dropdown",
        "calcite-dropdown-group",
        "calcite-dropdown-item",
      ],
    },
    { components: ["calcite-icon"] },
    { components: ["calcite-input"] },
    { components: ["calcite-input-message"] },
    { components: ["calcite-label"] },
    { components: ["calcite-link"] },
    { components: ["calcite-loader"] },
    { components: ["calcite-modal"] },
    { components: ["calcite-notice"] },
    { components: ["calcite-pagination"] },
    { components: ["calcite-popover", "calcite-popover-manager"] },
    { components: ["calcite-progress"] },
    { components: ["calcite-radio-group", "calcite-radio-group-item"] },
    { components: ["calcite-scrim"] },
    { components: ["calcite-slider"] },
    { components: ["calcite-stepper", "calcite-stepper-item"] },
    { components: ["calcite-switch"] },
    {
      components: [
        "calcite-tab",
        "calcite-tab-title",
        "calcite-tab-nav",
        "calcite-tabs",
      ],
    },
    { components: ["calcite-tooltip", "calcite-tooltip-manager"] },
    { components: ["calcite-tree", "calcite-tree-item"] },
  ],
  outputTargets: [
    { type: "dist-hydrate-script" },
    { type: "dist" },
    { type: "docs-readme" },
    {
      type: "www",
      baseUrl: "https://stenciljs.com/",
      prerenderConfig: "./prerender.config.js",
      copy: [{ src: "demos", dest: "demos" }],
      serviceWorker: {
        unregister: true,
      },
    },
  ],
  globalStyle: "src/assets/styles/global.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"],
    }),
  ],
  testing: {
    moduleNameMapper: {
      "^/assets/(.*)$": "<rootDir>/src/tests/iconPathDataStub.js",
    },
  },
  extras: {
    appendChildSlotFix: true,
    slotChildNodesFix: true,
  },
};
