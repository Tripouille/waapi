import { useRouter } from 'next/router';
import { TiPencil } from 'react-icons/ti';
import { chakra, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { useProductQuery } from 'services/product';
import { formatProductPrice } from 'utils/format';
import TagsList from 'components/TagsList';
import SimilarProducts from 'components/SimilarProducts';

const ProductDetailsPage = () => {
  const {
    query: { productId },
  } = useRouter();

  const { data: product, isSuccess } = useProductQuery(productId as string);

  if (isSuccess) {
    const { name, image, price, description, tags, _id } = product;

    return (
      <>
        <chakra.section mb={10}>
          <Flex direction={['column', null, 'row']}>
            <Image
              src={image}
              alt={name}
              borderRadius="2xl"
              w={['100%', null, '40%']}
              mr={[0, null, 16]}
              mb={[5, null, 0]}
              h="fit-content"
            />
            <VStack align="start" flex="1" spacing={6}>
              <Flex
                justify="space-between"
                w="full"
                align="center"
                direction={['column', null, 'row']}
              >
                <Heading as="h1" fontSize="2xl" fontWeight="bold" w={['full', null, '60%']} mr={1}>
                  {name}
                </Heading>
                <Text
                  fontSize="3xl"
                  fontWeight="medium"
                  wordBreak="break-all"
                  w={['full', null, '35%']}
                >
                  {formatProductPrice(price)}
                </Text>
              </Flex>
              <TagsList tags={tags} />
              <div>
                <Heading fontSize="xl" mb={3}>
                  Description :
                </Heading>
                <Text>{description}</Text>
              </div>
              <Button colorScheme="success" leftIcon={<TiPencil />}>
                Modifier
              </Button>
            </VStack>
          </Flex>
        </chakra.section>
        <SimilarProducts tags={tags} currentProductId={_id} />
      </>
    );
  }

  return null;
};

export default ProductDetailsPage;
