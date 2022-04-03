import { Box, Tag, TagCloseButton, TagLabel, Wrap } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import { trim } from 'lodash-es';
import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from 'react';
import { bgColorFromString, textColorFromBgColor } from 'utils/color';
import { formatTagValue } from 'utils/format';

export interface TagsInputProps {
  values: string[];
  onChange: (values: string[]) => void;
}

const TagsInput: FC<TagsInputProps> = ({ values, onChange }) => {
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

  const onRemoveTag = (valueToRemove: string) => () => {
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
      />
      <Wrap spacing={2} mt={2}>
        {values.map(value => {
          const bgColor = bgColorFromString(value);

          return (
            <Tag
              key={value}
              size="lg"
              borderRadius="full"
              color={textColorFromBgColor(bgColor)}
              bgColor={bgColor}
            >
              <TagLabel>{value}</TagLabel>
              <TagCloseButton onClick={onRemoveTag(value)} />
            </Tag>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default TagsInput;
