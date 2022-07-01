import Article from "../../src/components/Article/Article";
import SearchForm from "../../src/components/Search/SearchForm";
import { searchPostsByTags } from "../../src/lib/cms";
const Search = ({ posts }) => {
  const { stories } = posts;
  return (
    <div className="container">
      <SearchForm />
      {stories.map((post) => {
        return <Article key={post.id} data={post} />;
      })}
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const { search } = query;
  const data = await searchPostsByTags(search);
  return {
    props: {
      posts: data,
    },
  };
};
