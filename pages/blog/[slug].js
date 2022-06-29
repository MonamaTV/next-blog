import { fetchPost, fetchPostSlugs } from "../../src/lib/cms";
import styles from "./index.module.css";

const Blog = ({ post }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog_header}>
        <h1>
          Learn How to Pre-render Pages Using Static Generation with Next.js
        </h1>
        <small>20 June 2022</small>
      </div>
      <div className={styles.blog_content}>
        <h2>Header 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. At
          imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent
          elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean
          vel. Egestas sed tempus urna et pharetra pharetra massa massa
          ultricies. Venenatis cras sed felis eget velit. Consectetur libero id
          faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci
          phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi
          vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed
          blandit libero volutpat sed cras. Sed odio morbi quis commodo odio
          aenean sed adipiscing. Velit euismod in pellentesque massa placerat.
          Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi
          lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed.
          Luctus accumsan tortor posuere ac ut consequat semper viverra.
          Fringilla ut morbi tincidunt augue interdum velit euismod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. At
          imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent
          elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean
          vel. Egestas sed tempus urna et pharetra pharetra massa massa
          ultricies. Venenatis cras sed felis eget velit. Consectetur libero id
          faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci
          phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi
          vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed
          blandit libero volutpat sed cras. Sed odio morbi quis commodo odio
          aenean sed adipiscing. Velit euismod in pellentesque massa placerat.
          Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi
          lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed.
          Luctus accumsan tortor posuere ac ut consequat semper viverra.
          Fringilla ut morbi tincidunt augue interdum velit euismod.
        </p>
        <h2>Header 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. At
          imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent
          elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean
          vel. Egestas sed tempus urna et pharetra pharetra massa massa
          ultricies. Venenatis cras sed felis eget velit. Consectetur libero id
          faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci
          phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi
          vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed
          blandit libero volutpat sed cras. Sed odio morbi quis commodo odio
          aenean sed adipiscing. Velit euismod in pellentesque massa placerat.
          Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi
          lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed.
          Luctus accumsan tortor posuere ac ut consequat semper viverra.
          Fringilla ut morbi tincidunt augue interdum velit euismod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. At
          imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent
          elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean
          vel. Egestas sed tempus urna et pharetra pharetra massa massa
          ultricies. Venenatis cras sed felis eget velit. Consectetur libero id
          faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci
          phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi
          vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed
          blandit libero volutpat sed cras. Sed odio morbi quis commodo odio
          aenean sed adipiscing. Velit euismod in pellentesque massa placerat.
          Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi
          lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed.
          Luctus accumsan tortor posuere ac ut consequat semper viverra.
          Fringilla ut morbi tincidunt augue interdum velit euismod.
        </p>
      </div>
    </div>
  );
};

export default Blog;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = await fetchPost(slug);
  return {
    props: {
      post,
    },
  };
};
export const getStaticPaths = async ({ params }) => {
  const posts = await fetchPostSlugs();
  return {
    paths: posts,
    fallback: false,
  };
};
