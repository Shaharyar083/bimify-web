import { connectSearchBox } from "react-instantsearch-dom";
import { RiSearchLine } from "react-icons/ri";
import './NumSlider.css'

const CustomAlgoliaSearch = connectSearchBox(
  ({ currentRefinement, refine }) => {
    return (
      <>
       <RiSearchLine className="search-icon"/>
        <input
          type="text"
          placeholder="Search"
          value={currentRefinement}
          onChange={(e) => {
            refine(e.target.value);
          }}
        />
       
      </>
    );
  }
);

export default CustomAlgoliaSearch;
