import { getVectorStore } from "./helper/vector-store.js";

const vectorStore = await getVectorStore();
/* Search the vector DB independently with meta filters */
const results = await vectorStore.similaritySearch(
  "What is task decomposition?"
);
console.log(results);
