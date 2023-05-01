import React, { useContext } from "react";
import CarItem from "../../CarItem/CarItem";
import { SearchContext } from "../../../App";

const SearchAndSort = ({ items , categoryId }) => {
	const {search} = useContext(SearchContext)
  return (
    <>
      {items
        .filter((item) => {
          if (categoryId === 0) return true;
          return categoryId === +item.type;
        }).filter((item) => {
					return item.title.toLowerCase().includes(search.toLowerCase())
				})
        .map((item, i) => (
          <CarItem {...item} key={i} />
        ))}
    </>
  );
};

export default SearchAndSort;
