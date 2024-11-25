import { useState } from 'react';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className='searchBoXArea'>
      <input 
        type="text"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
