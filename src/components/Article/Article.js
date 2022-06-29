import Link from "next/link";
import MetaTags from "../Head/Head";
import styles from "./Article.module.css";
const Article = ({ data }) => {
  const {
    content: { content, description, tags, title },
    created_at,
    slug,
    published_at,
  } = data;
  return (
    <div className={styles.article}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>
        Published at {published_at?.split("T")[0] || created_at?.split("T")[0]}
      </small>
      <Link href={"/blog/" + slug + "?key=value"}>Read More</Link>
    </div>
  );
};

export default Article;
