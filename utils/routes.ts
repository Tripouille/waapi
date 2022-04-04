export const FrontRoutes = {
  HOME: () => '/',
  CREATE_PRODUCT: () => '/products/create',
  PRODUCT_DETAILS: (productId: string) => `/products/${productId}`,
  PRODUCT_EDIT: (productId: string) => `/products/${productId}/edit`,
} as const;
