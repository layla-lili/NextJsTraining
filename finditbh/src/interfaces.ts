export interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  image: string;
  rating: number;
  ratingCount: number;
}
//id, name, vendor, price, image, rating, ratingCount

export interface Vendor {
  id: number;
  name: string;
  products: Product[];
  image: string;
  category: string;
  rating: number;
  ratingCount: number;
}

export interface CartItem {
    product: Product;
    qty: number;
  }

  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'customer' | 'vendor' | 'founder' | 'guest';
  }
  