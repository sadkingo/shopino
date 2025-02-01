import { create } from 'zustand'
import { CartSliceType, CreateCartSlice } from "@/store/createCartSlice";

const useStore = create<CartSliceType>((...args) => ({
  ...CreateCartSlice(...args),
}));

export default useStore;