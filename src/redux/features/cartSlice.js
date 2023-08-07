import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
;
const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = { ...action.payload };
            const isAlreadyAdded = state.products.some((product) => product._id === productToAdd._id);
            if (isAlreadyAdded) {
                toast.error(`${productToAdd.name} already added to cart!`);
            } else {
                state.products.push(productToAdd);
                toast.success(`${productToAdd.name} added to cart!`);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.products.filter(
                (product) => product._id !== action.payload._id
            );
            if (state.products.length > 0) {
                toast.success(`${action.payload.name} removed from cart!`);
            } else {
                toast.success(`cart clear!`);
            }
        },
        removeAll: (state) => {
            state.cart = [];
            toast.success("cart clear!");
        }
    }
})

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;