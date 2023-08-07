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
                toast.error('already added to cart!');
            } else {
                state.products.push(productToAdd);
                toast.success(`${productToAdd.name} added to cart!`);
            }
        },
        removeFromCart: (state, action) => {
            state.components = state.components.filter(
                (component) => component.data.category !== action.payload.data.category
            );
            toast.success(`${action.payload.data.category} removed!`);
        },
        removeAll: (state, action) => {
            state.components = [];
            toast.success("build complete!");
        }
    }
})

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;