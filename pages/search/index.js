import SearchForm from "../../src/components/Search/SearchForm";
import { searchPostsByTags } from "../../src/lib/cms";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div className="container">
      <SearchForm />
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const { search } = query;
  const data = await searchPostsByTags(search);
  return {
    props: {},
  };
};
