import { Tag, TagCloseButton, TagLabel, Wrap } from '@chakra-ui/react';
import { FC } from 'react';
import { stringToTagColor } from 'utils/color';
import { formatTagValue } from 'utils/format';

export interface TagsListProps {
  tags: string[];
  onClose?: (closedTag: string) => void;
  isDisabled?: boolean;
}

const TagsList: FC<TagsListProps> = ({ tags, onClose, isDisabled = false }) => {
  return (
    <Wrap spacing={2} mt={2}>
      {tags.map(tag => {
        const color = stringToTagColor(tag);
        const bgColor = color + '15';

        return (
          <Tag
            key={tag}
            size="lg"
            borderRadius="full"
            color={color}
            bgColor={bgColor}
            fontWeight="semibold"
            as="li"
          >
            <TagLabel>{formatTagValue(tag)}</TagLabel>
            {onClose && (
              <TagCloseButton
                onClick={() => onClose(tag)}
                isDisabled={isDisabled}
                color={isDisabled ? bgColor : 'inherit'}
                pointerEvents={isDisabled ? 'none' : 'inherit'}
              />
            )}
          </Tag>
        );
      })}
    </Wrap>
  );
};

export default TagsList;
