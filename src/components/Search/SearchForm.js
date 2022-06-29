import styles from "./SearchForm.module.css";
const SearchForm = () => {
  return (
    <div className={styles.search_form}>
      <form className={styles.search}>
        <input type="text" placeholder="Search blogs..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
