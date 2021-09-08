const FilterBar = (props) => {
  return (
    <>
      <label>Find Country</label>
      <br />
      <input value={props.searchValue} onChange={props.handleSearchChange} />
    </>
  );
};

export default FilterBar;