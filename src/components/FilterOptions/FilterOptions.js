import React, { useState } from "react";
import styles from "./FilterOptions.module.css";

const FilterOptions = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Example hardcoded filters
  const filters = ["free", "paid", "popular", "new"];

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={styles.filterOptions}>
      {filters.map((filter, index) => (
        <span
          key={index}
          onClick={() => handleFilterSelect(filter)}
          className={`${styles.filterOption} ${
            selectedFilter === filter ? styles.selected : ""
          }`}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default FilterOptions;
