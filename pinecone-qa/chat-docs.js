import { ConversationalRetrievalQAChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { getVectorStore } from "./helper/vector-store.js";

const memory = new BufferMemory({
  memoryKey: "chat_history",
  returnMessages: true,
});

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
});

const vectorStore = await getVectorStore();
const chain = ConversationalRetrievalQAChain.fromLLM(
  model,
  vectorStore.asRetriever(),
  {
    memory,
  }
);

const result = await chain.call({
  question: "What are some of the main ideas in self-reflection?",
});

console.log(result);

const followupResult = await chain.call({
  question: "How does the reflection paper handle it?",
});
console.log(followupResult);
