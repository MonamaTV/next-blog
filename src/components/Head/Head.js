import Head from "next/head";
const MetaTags = ({ title = "TadBlog", description, tags }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags} />
    </Head>
  );
};

export default MetaTags;
