// cart.model.ts
export interface CartItem {
    productId: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }
  
  export interface CartState {
    items: CartItem[];
    totalPrice: number;
    discountApplied: boolean;
    snackbarMessage: { text: string; action: string; duration: number } | null;
  }
  