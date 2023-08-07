import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
;
const initialState = {
    products: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = { ...action.payload, cartQuantity: 1 };
            const isAlreadyAdded = state.products.some((product) => product._id === productToAdd._id);
            if (isAlreadyAdded) {
                toast.error(`${productToAdd.name} already added to cart!`);
            } else {
                state.products.push(productToAdd);
                toast.success(`${productToAdd.name} added to cart!`);
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload._id
            );
            if (state.products.length > 0) {
                toast.success(`${action.payload.name} removed from cart!`);
            } else {
                toast.success(`cart clear!`);
            }
        },
        increaseCartItem: (state, action) => {
            const index = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
            if (index >= 0) {
                state.products[index].cartQuantity += 1;
                toast.success(`increased ${action.payload.name} quantity`)
            }
        },
        decreaseCartItem: (state, action) => {
            const index = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
            if (state.products[index].cartQuantity > 1) {
                state.products[index].cartQuantity -= 1;
                toast.error(`decreased ${action.payload.name} quantity`);

            } else if (state.products[index].cartQuantity === 1) {
                const nextCartItems = state.products.filter(
                    (item) => item._id !== action.payload._id
                );
                state.products = nextCartItems;
                toast.error(`${action.payload.name} removed from cart`);
            }
        },
        clearCart: (state) => {
            state.products = [];
            toast.success("cart clear!");
        },
        getCartTotal(state) {
            let { total, quantity } = state.products.reduce((cartTotal, cartItem) => {

                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    }
})

export const { addToCart, removeFromCart, increaseCartItem, decreaseCartItem, getCartTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 