const SearchBox = ({
  searchChange,
}: {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="p2">
      <input
        type="search"
        placeholder="search cats"
        onChange={searchChange}
        maxLength={20}
      />
    </div>
  );
};

export default SearchBox;
