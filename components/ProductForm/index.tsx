import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { Button, Flex, Heading, Icon, Stack, VStack } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import TagsInput from 'components/TagsInput';
import { Product } from 'services/product/types';
import { isEqual, pick } from 'lodash-es';
import FormTextarea from 'components/FormTextarea';

export type ProductFormData = Omit<Product, '_id' | 'price'> & {
  price: string;
};

const defaultProductFormData: ProductFormData = {
  name: '',
  description: '',
  image: '',
  price: '',
  tags: [],
};

export interface ProductFormProps {
  title: string;
  titleIcon: IconType;
  submitLabel: string;
  product?: Product;
  onSubmit: (productFormData: ProductFormData) => void;
  isLoading: boolean;
  resetFormAfterSubmit?: boolean;
}

export const convertProductToProductFormData = (product: Product): ProductFormData => {
  return {
    ...pick(product, ['name', 'description', 'image', 'tags']),
    price: product.price.toString(),
  };
};

const ProductForm: FC<ProductFormProps> = ({
  title,
  titleIcon,
  submitLabel,
  product,
  onSubmit,
  isLoading,
  resetFormAfterSubmit = false,
}) => {
  const [productFormData, setProductFormData] = useState<ProductFormData>(
    product ? convertProductToProductFormData(product) : defaultProductFormData,
  );
  const onProductFormStringDataChange =
    <P extends keyof ProductFormData, T extends HTMLInputElement | HTMLTextAreaElement>(
      property: P,
    ): ChangeEventHandler<T> =>
    ({ target: { value } }) => {
      setProductFormData(previousState => ({ ...previousState, [property]: value }));
    };

  const onTagsChange = (values: string[]) => {
    setProductFormData(previousState => ({ ...previousState, tags: values }));
  };

  const handleOnSubmit: FormEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
    onSubmit(productFormData);
  };

  const buttonIsDisabled =
    product && isEqual(convertProductToProductFormData(product), productFormData);

  useEffect(() => {
    if (resetFormAfterSubmit) setProductFormData(defaultProductFormData);
  }, [resetFormAfterSubmit]);

  return (
    <VStack
      as="form"
      p={[2, 4, 10]}
      bgColor="glass"
      borderWidth={2}
      borderColor="border"
      borderRadius="xl"
      align="start"
      spacing={5}
      onSubmit={handleOnSubmit}
    >
      <Flex align="center" alignSelf={['center', 'start']}>
        <Icon
          as={titleIcon}
          color="white"
          bgColor="success.500"
          w="48px"
          h="48px"
          borderRadius="md"
          p={3}
          mr={3}
        />
        <Heading as="h1" fontWeight="bold" fontSize="xl">
          {title}
        </Heading>
      </Flex>
      <Stack justify="space-between" w="full" flexDirection={['column', 'row']} spacing={[5, 0]}>
        <FormInput
          label="Nom du produit"
          placeholder="Nom du produit"
          w={['100%', '65%']}
          isRequired
          value={productFormData.name}
          onChange={onProductFormStringDataChange('name')}
          isDisabled={isLoading}
        />
        <FormInput
          type="number"
          step={0.01}
          label="Prix"
          placeholder="0,00"
          w={['100%', '30%']}
          isRequired
          rightAddon="€"
          value={productFormData.price}
          onChange={onProductFormStringDataChange('price')}
          isDisabled={isLoading}
        />
      </Stack>
      <FormTextarea
        label="Description"
        placeholder="Enter the description of your product here."
        isRequired
        value={productFormData.description}
        onChange={onProductFormStringDataChange('description')}
        isDisabled={isLoading}
        resize="none"
      />
      <FormInput
        label="Image"
        type="url"
        placeholder="Paste URL"
        isRequired
        value={productFormData.image}
        onChange={onProductFormStringDataChange('image')}
        isDisabled={isLoading}
      />
      <TagsInput values={productFormData.tags} onChange={onTagsChange} isDisabled={isLoading} />
      <Button
        type="submit"
        colorScheme="success"
        isLoading={isLoading}
        alignSelf={['center', 'start']}
        isDisabled={buttonIsDisabled}
      >
        {submitLabel}
      </Button>
    </VStack>
  );
};

export default ProductForm;
