import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <div>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
      </div>
      <div>
        <Layout />;
      </div>
    </div>
  );
};

export default App;
