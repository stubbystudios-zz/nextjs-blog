import { getAllPostIds, getPostData } from "../../lib/posts";

import Layout from "../../components/layout";

export default function Post({ postData }) {
  return (
    <Layout>
      <p>{postData.title}</p>
      <p>{postData.id}</p>
      <p>{postData.date}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
