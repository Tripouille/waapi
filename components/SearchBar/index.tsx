import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import useDebounce from 'hooks/useDebounce';
import { ChangeEventHandler, FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export interface SearchBarProps {
  onSearch: (searchTerms: string) => void;
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const [value, setValue] = useState('');
  const debouncedOnSearch = useDebounce(onSearch, 500);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setValue(value);
    debouncedOnSearch(value);
  };

  return (
    <InputGroup bgColor="white" color="#A0A3BD" borderRadius="md">
      <InputLeftElement pointerEvents="none">
        <FiSearch />
      </InputLeftElement>
      <Input type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    </InputGroup>
  );
};

export default SearchBar;