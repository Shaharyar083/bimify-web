import { connectSearchBox } from "react-instantsearch-dom";
import { FaSearch } from "react-icons/fa";

const CustomAlgoliaSearch = connectSearchBox(
  ({ currentRefinement, refine }) => {
    return (
      <>
        <input
          type="text"
          placeholder="Search"
          value={currentRefinement}
          onChange={(e) => {
            refine(e.target.value);
          }}
        />
        {currentRefinement && <FaSearch className="icon" />}
      </>
    );
  }
);

export default CustomAlgoliaSearch;
