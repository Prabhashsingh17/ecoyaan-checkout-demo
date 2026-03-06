export type MockCart = {
  cartItems: {
    product_id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    image: string;
  }[];
  shipping_fee: number;
  discount_applied: number;
};

const MOCK_CART: MockCart = {
  cartItems: [
    {
      product_id: 101,
      product_name: "Bamboo Toothbrush (Pack of 4)",
      product_price: 299,
      quantity: 2,
      image:
        "https://images.pexels.com/photos/3737822/pexels-photo-3737822.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      product_id: 102,
      product_name: "Reusable Cotton Produce Bags",
      product_price: 450,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ],
  shipping_fee: 50,
  discount_applied: 0,
};

export async function fetchMockCart(): Promise<MockCart> {
  // Simulate an asynchronous fetch during SSR.
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MOCK_CART;
}

