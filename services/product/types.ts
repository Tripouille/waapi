export interface Product {
  _id: string;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductsQueryParams {
  searchTerms?: string;
  tags?: string[];
  count?: number;
}

export interface ProductsQueryResponse {
  count: number;
  products: Product[];
}

export interface ProductQueryResponse {
  product: Product;
}
