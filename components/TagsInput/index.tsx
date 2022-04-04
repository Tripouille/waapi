import { trim } from 'lodash-es';
import { Box } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import TagsList from 'components/TagsList';
import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from 'react';
import { formatTagValue } from 'utils/format';

export interface TagsInputProps {
  values: string[];
  onChange: (values: string[]) => void;
  isDisabled: boolean;
}

const TagsInput: FC<TagsInputProps> = ({ values, onChange, isDisabled }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setInputValue(formatTagValue(value));
  };

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const normalizedValue = trim(inputValue);
      if (normalizedValue && !values.includes(normalizedValue)) {
        setInputValue('');
        onChange([...values, normalizedValue]);
      }
    }
  };

  const onRemoveTag = (valueToRemove: string) => {
    onChange(values.filter(value => value !== valueToRemove));
  };

  return (
    <Box w="full">
      <FormInput
        label="Tags"
        placeholder="Write a tag and hit enter to add it."
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        isDisabled={isDisabled}
      />
      <TagsList tags={values} onClose={onRemoveTag} isDisabled={isDisabled} />
    </Box>
  );
};

export default TagsInput;
