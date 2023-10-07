export const CONFIG_FILE = "dep-spider.config.mjs";
export { Config } from "@dep-spider/core";
export const defaultConfig = {
  depth: 3,
  size: false,
  output: {
    graph: "ds.graph.json",
    circularDependency: "ds.circular.json",
    codependency: "ds.co.json",
  },
};
