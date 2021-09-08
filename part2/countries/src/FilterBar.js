const FilterBar = (props) => {
  return (
    <>
      <label>Find Countries</label>
      <input value={props.searchValue} onChange={props.handleSearchChange} />
    </>
  );
};

export default FilterBar;