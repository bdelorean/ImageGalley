const SearchInput = ({ query, setQuery, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col items-center justify-center gap-6"
    >
      <input
        type="text"
        placeholder="Search for images... "
        className="w-96 h-10 rounded-lg px-4 border-2 border-gray-300 focus:border-gray-800  outline-none transition-all duration-300 placeholder-gray-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className=" px-10 py-1 bg-secondary text-white rounded focus:outline-none focus:ring focus:ring-secondary flex justify-center items-center"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
