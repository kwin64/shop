const Search = ({ inputValueSearch }) => {
  return (
    <input
      className="search"
      placeholder="Поиск пиццы"
      onChange={(e) => inputValueSearch(e.currentTarget.value)}
    />
  );
};
export default Search;
