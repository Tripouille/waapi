import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import useDebounce from 'hooks/useDebounce';
import { ChangeEventHandler, FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { formatSearchValue } from 'utils/format';

export interface SearchBarProps {
  onSearch: (searchTerms: string) => void;
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const [value, setValue] = useState('');
  const debouncedOnSearch = useDebounce(onSearch);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    const searchTerms = formatSearchValue(value);
    setValue(searchTerms);
    debouncedOnSearch(searchTerms);
  };

  return (
    <InputGroup bgColor="transparent" color="#A0A3BD" borderRadius="md">
      <InputLeftElement pointerEvents="none">
        <FiSearch />
      </InputLeftElement>
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        borderColor="border"
        borderWidth={1.5}
        data-cy="search-bar"
      />
    </InputGroup>
  );
};

export default SearchBar;
