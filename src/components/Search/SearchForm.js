import styles from "./SearchForm.module.css";
import { useState } from "react";
const SearchForm = () => {
  //Search state
  const [search, setSearch] = useState("");
  //Handle input
  const handleInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  //(Re)direct to search page to make another search
  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = "/search?search=" + search;
  };
  //JSX
  return (
    <div className={styles.search_form}>
      <form className={styles.search}>
        <input
          value={search}
          onChange={handleInput}
          type="text"
          placeholder="Search blogs..."
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
