const SearchInput = ({ query, setQuery, searchImages}) => {
  return (
    <form onSubmit={searchImages} className="flex flex-col items-center justify-center gap-6">
      <input
        type="text"
        placeholder="Search for images..."
        className="w-80 h-10 rounded-lg px-4 border-2 border-gray-300 focus:border-gray-800 focus:ring focus:ring-gray-500/50 outline-none transition-all duration-300"
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
