import React from "react";

const SearchInput = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchInputValue(event.target.value)}
        placeholder="Enter to search..."
      ></input>
    </div>
  );
};

export default SearchInput;
