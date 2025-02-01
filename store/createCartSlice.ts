import { StateCreator } from "zustand";

type CartItemType = {
  id: string,
  name: string,
  price: number,
  quantity: number,
}
type CartSliceType = {
  items: CartItemType[],
  total: number,
}

const CreateCartSlice: StateCreator<CartSliceType> = (set) => ({
  items: [],
  total: 0,

  addItem: (item: CartItemType) =>
    set((state) => ({
      items: [...state.items, item],
      total: state.total + item.price * item.quantity,
    })),

  removeItem: (itemId: string) =>
    set((state) => {
      const itemIndex = state.items.findIndex((i) => i.id === itemId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        return {
          items: [
            ...state.items.slice(0, itemIndex),
            ...state.items.slice(itemIndex + 1),
          ],
          total: state.total - item.price * item.quantity,
        };
      }
      return state;
    }),

  updateQuantity: (itemId: string, newQuantity: number) =>
    set((state) => {
      const itemIndex = state.items.findIndex((i) => i.id === itemId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        return {
          items: [
            ...state.items.slice(0, itemIndex),
            {...item, quantity: newQuantity},
            ...state.items.slice(itemIndex + 1),
          ],
          total: state.total - item.price * item.quantity + item.price * newQuantity,
        };
      }
      return state;
    }),
});

export type { CartSliceType }
export { CreateCartSlice };