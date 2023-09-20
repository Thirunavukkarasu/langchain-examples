import { PineconeClient } from "@pinecone-database/pinecone";
import * as dotenv from "dotenv";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

dotenv.config();

const client = new PineconeClient();
await client.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});
const pineconeIndex = client.Index(process.env.PINECONE_INDEX);

// Document loader
async function loadPage() {
  const loader = new CheerioWebBaseLoader(
    "https://lilianweng.github.io/posts/2023-06-23-agent/"
  );
  const data = await loader.load();
  return data;
}

// Split the Document into chunks for embedding and vector storage.
async function splitDocument(data) {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0,
  });

  const splitDocs = await textSplitter.splitDocuments(data);
  return splitDocs;
}

//Embed and store the splits in a vector database (for demo purposes we use an unoptimized, in-memory example but you can browse integrations here):
async function embedStore(splitDocs) {
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const vectorStore = await PineconeStore.fromDocuments(splitDocs, embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
  });
  return vectorStore;
}

const data = await loadPage();
const splitDocs = await splitDocument(data);
const vectorStore = embedStore(splitDocs);
