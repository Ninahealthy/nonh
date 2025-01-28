"use client";

import Form from "next/form";
import Styles from "./Search.module.css";

export default function SearchForm() {
  const handleSubmit = (formData) => {
    const query = formData.get("q")?.toString() || "";
    const url = `/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <Form action={handleSubmit} className={Styles.form}>
        <input
          name="q"
          className={Styles.input}
          type="text"
          placeholder="Search..."
        />

        <button className={Styles.button} type="submit">
          Search
        </button>
      </Form>
    </div>
  );
}

/*"use client";

import { useState } from "react";
import Styles from "./Search.module.css";

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    console.log(searchValue);
    // Open the search results in a new tab
    window.open(`/search?q=${searchValue}`);
  }

  return (
    // try to make multiple <input> for multiple text input
    <div>
      <form className={Styles.form}>
        <input
          className={Styles.input}
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className={Styles.button} type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
}*/
