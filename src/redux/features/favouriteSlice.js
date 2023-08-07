import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
;
const initialState = {
    products: [],
};

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addToFavourite: (state, action) => {
            const productToAdd = { ...action.payload };
            const isAlreadyAdded = state.products.some((product) => product._id === productToAdd._id);
            if (isAlreadyAdded) {
                toast.error(`${productToAdd.name} already added to favourite!`, {
                    toastClassName: 'custom-toast-message'
                });
            } else {
                state.products.push(productToAdd);
                toast.success(`${productToAdd.name} added to favourite!`);
            }
        },
        removeFromCart: (state, action) => {
            state.favourite = state.products.filter(
                (product) => product._id !== action.payload._id
            );
            if (state.products.length > 0) {
                toast.success(`${action.payload.name} removed from favourite!`, {
                    toastClassName: 'custom-toast-message'
                });
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

export const { addToFavourite, removeFromFavourite, removeAll } = favouriteSlice.actions;
export default favouriteSlice.reducer;