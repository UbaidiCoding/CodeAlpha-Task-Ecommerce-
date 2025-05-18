export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type SortOption = 'price-low' | 'price-high' | 'rating' | 'name';

export type FilterCategory = string | null;