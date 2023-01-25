function FilterBar() {
  const options = ["Unread", "Read", "Favorites"];
  return (
    <div className="filter-bar">
      <p>Filter By: </p>
      {options.map((option) => (
        <div key={option} className="filter-bar-btn">
          {option}
        </div>
      ))}
    </div>
  );
}

export default FilterBar;
