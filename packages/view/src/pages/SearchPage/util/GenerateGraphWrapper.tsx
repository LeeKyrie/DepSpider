import { generateGraph } from "@dep-spider/core";

export async function generateGraphWrapper(info: string) {
  const graph = await generateGraph(info);
  console.log(JSON.parse(JSON.stringify(await graph.getGraph())));
}
