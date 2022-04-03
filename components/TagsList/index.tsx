import { Tag, TagCloseButton, TagLabel, Wrap } from "@chakra-ui/react";
import { FC } from "react";
import { bgColorFromString, textColorFromBgColor } from "utils/color";

export interface TagsListProps {
  tags: string[];
  onClose?: (closedTag: string) => void;
}

const TagsList: FC<TagsListProps> = ({tags, onClose}) => {
  return (
    <Wrap spacing={2} mt={2}>
      {tags.map(tag => {
        const bgColor = bgColorFromString(tag);

        return (
          <Tag
            key={tag}
            size="lg"
            borderRadius="full"
            color={textColorFromBgColor(bgColor)}
            bgColor={bgColor}
            fontWeight="medium"
          >
            <TagLabel>{tag}</TagLabel>
            {onClose && <TagCloseButton onClick={() => onClose(tag)} />}
          </Tag>
        );
      })}
    </Wrap>
  );
}
 
export default TagsList;