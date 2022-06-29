import Head from "next/head";
import Article from "../src/components/Article/Article";
import SearchForm from "../src/components/Search/SearchForm";
import { fetchPosts } from "../src/lib/cms";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  const { stories } = posts;
  return (
    <div className={styles.container}>
      <Head>
        <title>TadBlog - find everything web development in one place</title>
        <meta
          name="description"
          content="The homepage of Tadblog - find everything web development in one place."
        />
      </Head>
      <SearchForm />

      <main className={styles.main}>
        {stories.map((article) => {
          return <Article key={article.id} data={article} />;
        })}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetchPosts();
  return {
    props: {
      posts: data,
    },
  };
};
