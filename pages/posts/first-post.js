import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post: Create Next App</title>
      </Head>
      <header>
        <h1>First Post</h1>
      </header>
      <p>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </p>
    </Layout>
  );
}
