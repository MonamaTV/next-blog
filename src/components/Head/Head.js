import Head from "next/head";
//Head tag to insert on the blog posts
const MetaTags = ({ title = "TadBlog", description, tags }) => {
  //Using the Head component
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags} />
    </Head>
  );
};

export default MetaTags;
