import React from "react";
import styles from "./SearchBar.module.css"; 

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="search"
        className={styles.searchBar}
      />
    </div>
  );
};

export default SearchBar;
