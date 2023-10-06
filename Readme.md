# langchain-examples

<h4 align="center">
  <a href="https://github.com/thirunavukkarasu/langchain-examples/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Released under the MIT license." />
  </a>
  <a href="https://github.com/thirunavukkarasu/langchain-examples">
    <img src="https://img.shields.io/github/stars/thirunavukkarasu/langchain-examples" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/thirunavukkarasu/langchain-examples">
    <img src="https://img.shields.io/github/forks/thirunavukkarasu/langchain-examples" alt="GitHub Forks" />
  </a>
  <a href="https://github.com/thirunavukkarasu/langchain-examples">
    <img src="https://img.shields.io/github/watchers/thirunavukkarasu/langchain-examples" alt="GitHub Watchers" />
  </a>
  <a href="https://twitter.com/thiru_ma">
    <img src="https://img.shields.io/twitter/follow/thirunavukkarasu?label=Follow" alt="Follow on Twitter" />
  </a>
</h4>

This repository contains a collection of apps powered by LangChain.

[LangChain](https://langchain.readthedocs.io/en/latest) is an open-source framework created to aid the development of applications leveraging the power of large language models (LLMs). It can be used for chatbots, text summarisation, data generation, code understanding, question answering, evaluation, and more.

### [all-in-one](https://github.com/thirunavukkarasu/langchain-examples/blob/main/all-in-one)

A multi-page Streamlit application showcasing generative AI uses cases with LangChain, OpenAI, and others.

### [chroma-summary](https://github.com/thirunavukkarasu/langchain-examples/blob/main/chroma-summary)

A sample Streamlit web application for summarizing documents using LangChain and Chroma.

### [helicone](https://github.com/thirunavukkarasu/langchain-examples/blob/main/helicone)

A sample Streamlit web application to demo LLM observability using LangChain and Helicone.

### [news-summary](https://github.com/thirunavukkarasu/langchain-examples/blob/main/news-summary)

A sample Streamlit application for Google news search and summaries using LangChain and Serper API.

### [pinecone-qa](https://github.com/thirunavukkarasu/langchain-examples/blob/main/pinecone-qa)

A sample Streamlit web application for generative question-answering with LangChain and Pinecone.

### [pinecone-summary](https://github.com/thirunavukkarasu/langchain-examples/blob/main/pinecone-summary)

A sample Streamlit web application for document summarization with LangChain and Pinecone.

### [search](https://github.com/thirunavukkarasu/langchain-examples/blob/main/search)

A sample Streamlit web application for search queries using LangChain and SerpApi.

### [text-summary](https://github.com/thirunavukkarasu/langchain-examples/blob/main/text-summary)

A sample Streamlit web application for summarizing text using LangChain and OpenAI.

### [url-summary](https://github.com/thirunavukkarasu/langchain-examples/blob/main/url-summary)

A sample Streamlit application to summarize URL content using LangChain and OpenAI.

```mermaid
graph TD
  subgraph MobileApp
    subgraph UserInterface
      UI[User Interface]
    end
    subgraph Controllers
      OM[Order Management Controller]
      IM[Inventory Management Controller]
      FM[Finance Management Controller]
    end
  end

  subgraph Backend
    subgraph APIs
      ORAPI[Order API]
      INAPI[Inventory API]
      FINAPI[Finance API]
    end
    DB[Aurora Serverless<br/>Database]
    ext[External Services]
  end

  subgraph External
    PG[Payment Gateway]
    NT[Notification Service]
  end

  subgraph Reporting
    RP[Reporting & Analytics]
  end

  UI --> OM
  UI --> IM
  UI --> FM

  OM --> ORAPI
  OM --> DB
  OM --> NT

  IM --> INAPI
  IM --> DB
  IM --> NT

  FM --> FINAPI
  FM --> DB
  FM --> PG
  FM --> RP

  ORAPI --> DB
  INAPI --> DB
  FINAPI --> DB

  ext --> PG
  ext --> NT

  RP --> DB

  aws --> VPC
  VPC --> subnet1
  VPC --> subnet2
  VPC --> subnet3
  aws --> UI
  aws --> Backend
  aws --> External
  aws --> DB


```
